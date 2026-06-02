import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { ProductCardComponent } from '../product-card/product-card';
import { Product } from '../../data/products-data';

@Component({
  selector: 'product-most-searched',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-most-searched.html'
})
export class ProductMostSearchedComponent {
  private productService = inject(ProductService);

  @Input() currentId?: string;
  @Input() limit = 4;

  get products(): Product[] {
    const list = this.productService.getMostSearchedProducts(this.limit + 2);
    const filtered = this.currentId ? list.filter(p => p.id !== this.currentId) : list;
    return filtered.slice(0, this.limit);
  }
}
