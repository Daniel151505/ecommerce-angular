import { Component, output, inject, computed, signal } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class HeaderComponent {
  public toggleCart = output<void>();
  public isMenuOpen = signal(false);
  private cartService = inject(CartService);
  private router = inject(Router);
  public productService = inject(ProductService);

  public searchQuery = '';
  public cartCount = computed(() => this.cartService.totalItemsCount());
  public favCount = computed(() => this.cartService.favorites().length);

  public onSearchInput(event: Event) {
    const target = event.target as HTMLInputElement;
    this.searchQuery = target.value;
  }

  public onSearch(event: Event) {
    event.preventDefault();
    if (this.searchQuery.trim() !== '') {
      this.router.navigate(['/categoria', 'todos'], { queryParams: { q: this.searchQuery.trim() } });
    } else {
      this.router.navigate(['/categoria', 'todos']);
    }
  }

  public toggleMenu() {
    this.isMenuOpen.update(open => !open);
  }

  public closeMenu() {
    this.isMenuOpen.set(false);
  }
}
