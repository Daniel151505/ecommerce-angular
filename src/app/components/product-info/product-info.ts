import { Component, inject, Input, Output, EventEmitter, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { CartService } from '../../services/cart.service';
import { Product } from '../../data/products-data';

@Component({
  selector: 'product-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-info.html'
})
export class ProductInfoComponent {
  private cartService = inject(CartService);
  private sanitizer = inject(DomSanitizer);

  @Input() product?: Product;
  @Input() activeImage: string = '';

  public selectedPresentation = signal<'pack' | 'blister'>('pack');
  public shortDescExpanded = signal<boolean>(false);

  public isSoldOut = computed(() => {
    const p = this.product;
    if (!p) return true;
    return p.productStatus === 'SOLD_OUT' || p.stock <= 0;
  });

  public discountPercent = computed(() => {
    const p = this.product;
    if (!p) return 0;
    if (p.brand === 'HUGGIES') return 15;
    if (p.brand === 'NINET') return 10;
    return 5;
  });

  public hasDiscounts = computed(() => {
    const p = this.product;
    return p ? (p.ranking ?? 0) > 0 : false;
  });

  public onlinePrice = computed(() => {
    const p = this.product;
    if (!p) return 0;
    if (this.hasDiscounts()) {
      return p.price * (1 - this.discountPercent() / 100);
    }
    return p.price;
  });

  public exclusivePrice = computed(() => {
    return this.onlinePrice() * 0.9;
  });

  public shortDescFirst = computed(() => {
    const p = this.product;
    if (!p?.shortDescription) return '';
    const html = p.shortDescription;
    const pMatches = [...html.matchAll(/<p[^>]*>.*?<\/p>/gis)];
    if (pMatches.length > 0) {
      return pMatches.slice(0, 2).map(m => m[0]).join('');
    }
    const liMatches = [...html.matchAll(/<li[^>]*>.*?<\/li>/gis)];
    if (liMatches.length > 0) {
      return `<ul>${liMatches.slice(0, 2).map(m => m[0]).join('')}</ul>`;
    }
    const firstBr = html.indexOf('<br');
    const secondBr = firstBr > -1 ? html.indexOf('<br', firstBr + 1) : -1;
    if (secondBr > 0) return html.slice(0, secondBr);
    if (firstBr > 0) return html.slice(0, firstBr);
    return html;
  });

  public shortDescRest = computed(() => {
    const p = this.product;
    if (!p?.shortDescription) return '';
    const html = p.shortDescription;
    const pMatches = [...html.matchAll(/<p[^>]*>.*?<\/p>/gis)];
    if (pMatches.length > 2) {
      const cutoffMatch = pMatches[1];
      const idx = html.indexOf(cutoffMatch[0]) + cutoffMatch[0].length;
      return html.slice(idx).trim();
    }
    const liMatches = [...html.matchAll(/<li[^>]*>.*?<\/li>/gis)];
    if (liMatches.length > 2) {
      const cutoffMatch = liMatches[1];
      const idx = html.indexOf(cutoffMatch[0]) + cutoffMatch[0].length;
      const rest = html.slice(idx).trim();
      return rest ? `<ul>${rest}</ul>` : '';
    }
    return '';
  });

  public isInCart = computed(() => {
    const p = this.product;
    if (!p) return false;
    return this.cartService.items().some(
      item => item.product.id === p.id && item.presentation === this.selectedPresentation()
    );
  });

  public cartQty = computed(() => {
    const p = this.product;
    if (!p) return 0;
    const found = this.cartService.items().find(
      item => item.product.id === p.id && item.presentation === this.selectedPresentation()
    );
    return found ? found.quantity : 0;
  });

  public isFav = computed(() => {
    const p = this.product;
    return p ? this.cartService.isFavorite(p.id) : false;
  });

  public setPresentation(presentation: 'pack' | 'blister') {
    this.selectedPresentation.set(presentation);
  }

  public toggleShortDesc() {
    this.shortDescExpanded.update(value => !value);
  }

  public addToCart() {
    const p = this.product;
    if (p) {
      this.cartService.addToCart(p, 1, this.selectedPresentation() as any);
    }
  }

  public increaseQty() {
    const p = this.product;
    if (p) {
      this.cartService.updateQuantity(p.id, this.selectedPresentation() as any, 1);
    }
  }

  public decreaseQty() {
    const p = this.product;
    if (p) {
      this.cartService.updateQuantity(p.id, this.selectedPresentation() as any, -1);
    }
  }

  public toggleFav() {
    const p = this.product;
    if (p) {
      this.cartService.toggleFavorite(p.id);
    }
  }

  public onImgError(event: any) {
    this.imgError.emit(event);
  }

  @Output() imgError = new EventEmitter<any>();

  public getSafeHtml(content: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(content);
  }
}
