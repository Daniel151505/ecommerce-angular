import { Component, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Detail } from '../../data/products-data';

@Component({
  selector: 'product-detail-accordions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail-accordions.html'
})
export class ProductDetailAccordionsComponent {
  @Input() details: Detail[] = [];

  public openAccordions = signal<string[]>([]);

  constructor(private sanitizer: DomSanitizer) {}

  public toggleAccordion(key: string) {
    const cur = this.openAccordions();
    if (cur.includes(key)) {
      this.openAccordions.set([]);
    } else {
      this.openAccordions.set([key]);
    }
  }

  public getSafeHtml(content: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(content);
  }
}
