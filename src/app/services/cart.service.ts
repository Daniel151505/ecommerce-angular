import { Injectable, signal, computed, effect, inject } from '@angular/core';
import { Product } from '../data/products-data';
import { AnalyticsService } from './analytics.service';

export interface CartItem {
  product: Product;
  quantity: number;
  presentation: 'pack' | 'blister' | 'unit';
  price: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private analyticsService = inject(AnalyticsService);

  private cartItems = signal<CartItem[]>([]);
  private favoriteIds = signal<string[]>([]);

  public readonly items = computed(() => this.cartItems());
  public readonly favorites = computed(() => this.favoriteIds());

  public readonly totalItemsCount = computed(() => {
    return this.cartItems().reduce((acc, item) => acc + item.quantity, 0);
  });

  public readonly subtotal = computed(() => {
    return this.cartItems().reduce((acc, item) => acc + (item.price * item.quantity), 0);
  });

  constructor() {
    if (typeof window !== 'undefined') {
      try {
        const savedCart = localStorage.getItem('inkafarma_cart');
        if (savedCart) {
          this.cartItems.set(JSON.parse(savedCart));
        }
        const savedFavs = localStorage.getItem('inkafarma_favs');
        if (savedFavs) {
          this.favoriteIds.set(JSON.parse(savedFavs));
        }
      } catch (e) {
        console.error('Error loading state from localStorage:', e);
      }

      effect(() => {
        localStorage.setItem('inkafarma_cart', JSON.stringify(this.cartItems()));
      });

      effect(() => {
        localStorage.setItem('inkafarma_favs', JSON.stringify(this.favoriteIds()));
      });
    }
  }

  public getPriceForPresentation(product: Product, presentation: 'pack' | 'blister' | 'unit'): number {
    if (presentation === 'blister' && product.fractionatedPrice) {
      return product.fractionatedPrice;
    }
    if (presentation === 'unit' && product.unitPrice) {
      return product.unitPrice;
    }
    return product.pricePack || product.price;
  }

  public addToCart(product: Product, quantity = 1, presentation: 'pack' | 'blister' | 'unit' = 'pack') {
    const price = this.getPriceForPresentation(product, presentation);
    const current = this.cartItems();
    const existingIndex = current.findIndex(
      item => item.product.id === product.id && item.presentation === presentation
    );

    if (existingIndex > -1) {
      const updated = [...current];
      updated[existingIndex] = {
        ...updated[existingIndex],
        quantity: updated[existingIndex].quantity + quantity
      };
      this.cartItems.set(updated);
    } else {
      this.cartItems.set([...current, { product, quantity, presentation, price }]);
    }

    this.analyticsService.addToCart(product, quantity, presentation, price);
  }

  public updateQuantity(productId: string, presentation: 'pack' | 'blister' | 'unit', delta: number) {
    const current = this.cartItems();
    const index = current.findIndex(
      item => item.product.id === productId && item.presentation === presentation
    );

    if (index > -1) {
      const updated = [...current];
      const newQty = updated[index].quantity + delta;

      if (newQty <= 0) {
        updated.splice(index, 1);
      } else {
        const maxLimit = presentation === 'blister' || presentation === 'unit'
          ? (updated[index].product.maxUnitSaleFractionated || 60)
          : (updated[index].product.maxUnitSale || 6);

        if (newQty <= maxLimit) {
          updated[index] = { ...updated[index], quantity: newQty };
        }
      }
      this.cartItems.set(updated);
    }
  }


  public removeFromCart(productId: string, presentation: 'pack' | 'blister' | 'unit') {
    const current = this.cartItems();
    this.cartItems.set(
      current.filter(item => !(item.product.id === productId && item.presentation === presentation))
    );
  }

  public changePresentation(productId: string, oldPres: 'pack' | 'blister' | 'unit', newPres: 'pack' | 'blister' | 'unit') {
    const current = this.cartItems();
    const index = current.findIndex(item => item.product.id === productId && item.presentation === oldPres);

    if (index > -1) {
      const updated = [...current];
      const item = updated[index];
      const price = this.getPriceForPresentation(item.product, newPres);

      const targetIndex = current.findIndex(i => i.product.id === productId && i.presentation === newPres);
      if (targetIndex > -1 && targetIndex !== index) {
        updated[targetIndex] = {
          ...updated[targetIndex],
          quantity: updated[targetIndex].quantity + item.quantity
        };
        updated.splice(index, 1);
      } else {
        updated[index] = {
          ...item,
          presentation: newPres,
          price: price
        };
      }
      this.cartItems.set(updated);
    }
  }

  public toggleFavorite(productId: string) {
    const current = this.favoriteIds();
    if (current.includes(productId)) {
      this.favoriteIds.set(current.filter(id => id !== productId));
    } else {
      this.favoriteIds.set([...current, productId]);
    }
  }

  public isFavorite(productId: string): boolean {
    return this.favoriteIds().includes(productId);
  }

  public clearCart() {
    this.cartItems.set([]);
  }

}
