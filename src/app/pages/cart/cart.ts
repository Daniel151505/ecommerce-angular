import { Component, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { CartService, CartItem } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class CartComponent {
  private cartService = inject(CartService);
  private router = inject(Router);

  public items = computed(() => this.cartService.items());
  public subtotal = computed(() => this.cartService.subtotal());

  public getPresentationName(item: CartItem): string {
    if (item.presentation === 'blister') {
      return item.product.fractionatedText || 'BLÍSTER';
    }
    return item.product.noFractionatedText || (item.product.presentation + ' 100 UN');
  }

  public isFavorite(item: CartItem): boolean {
    return this.cartService.isFavorite(item.product.id);
  }

  public toggleFav(item: CartItem) {
    this.cartService.toggleFavorite(item.product.id);
  }

  public increaseQty(item: CartItem) {
    this.cartService.updateQuantity(item.product.id, item.presentation, 1);
  }

  public decreaseQty(item: CartItem) {
    this.cartService.updateQuantity(item.product.id, item.presentation, -1);
  }

  public deleteItem(item: CartItem) {
    this.cartService.removeFromCart(item.product.id, item.presentation);
  }

  public onPresentationChange(item: CartItem, event: Event) {
    const target = event.target as HTMLSelectElement;
    this.cartService.changePresentation(item.product.id, item.presentation, target.value as any);
  }

  public checkout() {
    alert(`¡Muchas gracias por simular tu compra en Inkafarma!\nTotal a pagar: S/ ${this.subtotal().toFixed(2)}\nTu pedido ha sido procesado de forma simulada.`);
    this.cartService.clearCart();
    this.router.navigate(['/categoria', 'todos']);
  }

  public onImgError(event: any) {
    event.target.src = 'https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/136049X.jpg';
  }
}
