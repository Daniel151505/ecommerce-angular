import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Product } from '../../data/products-data';
import { CartService } from '../../services/cart.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './favorites.html',
  styleUrl: './favorites.css'
})
export class FavoritesComponent {
  private cartService = inject(CartService);
  private productService = inject(ProductService);

  public favoriteProducts = computed(() => {
    const favoriteIds = this.cartService.favorites();
    return this.productService.getProducts().filter(product => favoriteIds.includes(product.id));
  });

  constructor() {
    this.productService.selectedCategory.set('todos');
  }

  public getPresentationName(product: Product): string {
    return product.noFractionatedText || `${product.presentation} ${product.quantityUnitsCore || product.quantityUnits || 1} UN`;
  }

  public getProductPrice(product: Product): number {
    return product.pricePack || product.price;
  }

  public isInCart(product: Product): boolean {
    return this.cartService.items().some(item => item.product.id === product.id && item.presentation === 'pack');
  }

  public addToCart(product: Product) {
    this.cartService.addToCart(product, 1, 'pack');
  }

  public removeFavorite(product: Product) {
    this.cartService.toggleFavorite(product.id);
  }

  public onImgError(event: any) {
    event.target.src = 'https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/136049X.jpg';
  }
}
