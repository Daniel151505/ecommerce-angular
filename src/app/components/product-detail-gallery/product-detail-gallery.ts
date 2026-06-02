import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-detail-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail-gallery.html',
})
export class ProductDetailGalleryComponent {
  @Input() thumbnails: string[] = [];
  @Input() activeImage: string = '';
  @Input() isSoldOut: boolean = false;

  @Output() activeImageChange = new EventEmitter<string>();
  @Output() imgError = new EventEmitter<any>();

  public setActiveImage(url: string) {
    this.activeImageChange.emit(url);
  }

  public onImgError(event: any) {
    this.imgError.emit(event);
  }
}
