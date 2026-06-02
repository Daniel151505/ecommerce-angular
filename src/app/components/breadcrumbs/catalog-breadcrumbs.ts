import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-breadcrumbs',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './catalog-breadcrumbs.html'
})
export class BreadcrumbsComponent {
  @Input() title?: string;
  @Input() category?: string;
  @Input() categoryLink?: string;
}
