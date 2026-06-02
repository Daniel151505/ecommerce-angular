import { Component, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../data/products-data';
import { ProductCardComponent } from '../product-card/product-card';

@Component({
  selector: 'app-category-most-viewed',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './category-most-viewed.html'
})
export class CategoryMostViewedComponent {
  @Input() featuredProducts: Product[] = [];
  public slideIndex = signal(0);

  public slideNext() {
    const totalSlides = Math.max(1, Math.ceil(this.featuredProducts.length / 3));
    this.slideIndex.update(idx => (idx + 1) % totalSlides);
  }

  public slidePrev() {
    const totalSlides = Math.max(1, Math.ceil(this.featuredProducts.length / 3));
    this.slideIndex.update(idx => (idx - 1 + totalSlides) % totalSlides);
  }
}
