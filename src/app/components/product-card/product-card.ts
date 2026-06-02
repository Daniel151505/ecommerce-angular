import { Component, Input, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Product } from '../../data/products-data';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css'
})
export class ProductCardComponent {
  @Input({ required: true }) public product!: Product;
  @Input() public fromCategory?: string;

  private cartService = inject(CartService);

  public isFav = computed(() => this.cartService.isFavorite(this.product.id));

  public isInCart = computed(() => {
    return this.cartService.items().some(item => item.product.id === this.product.id && item.presentation === 'pack');
  });

  public cartQty = computed(() => {
    const found = this.cartService.items().find(item => item.product.id === this.product.id && item.presentation === 'pack');
    return found ? found.quantity : 0;
  });

  public get isSoldOut(): boolean {
    return this.product.productStatus === 'SOLD_OUT' || this.product.stock <= 0;
  }

  public get hasDiscounts(): boolean {
    return (this.product.ranking ?? 0) > 0;
  }

  public get discountPercent(): number {
    if (this.product.brand === 'HUGGIES') return 15;
    if (this.product.brand === 'NINET') return 10;
    return 5;
  }

  public get onlinePrice(): number {
    if (this.hasDiscounts) {
      return this.product.price * (1 - this.discountPercent / 100);
    }
    return this.product.price;
  }

  public get exclusivePrice(): number {
    return this.onlinePrice * 0.9;
  }

  public toggleFav(event: Event) {
    event.stopPropagation();
    event.preventDefault();
    this.cartService.toggleFavorite(this.product.id);
  }

  public addToCart(event: Event) {
    event.stopPropagation();
    event.preventDefault();
    this.cartService.addToCart(this.product, 1, 'pack');
  }

  public increaseQty(event: Event) {
    event.stopPropagation();
    event.preventDefault();
    this.cartService.updateQuantity(this.product.id, 'pack', 1);
  }

  public decreaseQty(event: Event) {
    event.stopPropagation();
    event.preventDefault();
    this.cartService.updateQuantity(this.product.id, 'pack', -1);
  }

  public onImgError(event: any) {
    event.target.src = 'https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/136049X.jpg';
  }
}
