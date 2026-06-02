import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-catalog-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './catalog-banner.html'
})
export class CatalogBannerComponent {
  @Input() title = '';
  @Input() description = '';
  @Input() image = '';
  @Input() colorFrom = '#009639';
}
