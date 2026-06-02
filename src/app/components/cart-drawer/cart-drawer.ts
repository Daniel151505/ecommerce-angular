import { Component, signal, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { CartService, CartItem } from '../../services/cart.service';

@Component({
  selector: 'app-cart-drawer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cart-drawer.html',
  styleUrl: './cart-drawer.css'
})
export class CartDrawerComponent {
  private cartService = inject(CartService);
  private router = inject(Router);

  public isOpen = signal<boolean>(false);

  public items = computed(() => this.cartService.items());
  public subtotal = computed(() => this.cartService.subtotal());
  public totalItems = computed(() => this.cartService.totalItemsCount());

  public toggle() {
    this.isOpen.update(val => !val);
  }

  public close() {
    this.isOpen.set(false);
  }

  public getPresentationName(item: CartItem): string {
    if (item.presentation === 'blister') {
      return item.product.fractionatedText || 'BLÍSTER';
    }
    if (item.presentation === 'unit') {
      return 'UNIDAD';
    }
    return item.product.noFractionatedText || (item.product.presentation + ' ' + item.product.quantityUnitsCore + ' UN');
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

  public onBuy() {
    alert(`¡Muchas gracias por simular tu compra en Inkafarma!\nTotal a pagar: S/ ${this.subtotal().toFixed(2)}\nTu pedido ha sido procesado de forma simulada.`);
    this.cartService.clearCart();
    this.close();
    this.router.navigate(['/categoria', 'todos']);
  }

  public onImgError(event: any) {
    event.target.src = 'https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/136049X.jpg';
  }
}
