import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { AnalyticsService } from '../../services/analytics.service';
import { Product } from '../../data/products-data';
import { ProductDetailGalleryComponent } from '../../components/product-detail-gallery/product-detail-gallery';
import { BreadcrumbsComponent } from '../../components/breadcrumbs/catalog-breadcrumbs';
import { ProductMostSearchedComponent } from '../../components/product-most-searched/product-most-searched';
import { ProductDetailAccordionsComponent } from '../../components/product-detail-accordions/product-detail-accordions';
import { ProductInfoComponent } from '../../components/product-info/product-info';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, ProductDetailGalleryComponent, BreadcrumbsComponent, ProductMostSearchedComponent, ProductDetailAccordionsComponent, ProductInfoComponent],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css'
})
export class ProductDetailComponent {
  private productService = inject(ProductService);
  private cartService = inject(CartService);
  private analyticsService = inject(AnalyticsService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  public isLoading = signal<boolean>(true);
  public product = signal<Product | undefined>(undefined);
  public activeImage = signal<string>('');
  public openAccordions = signal<string[]>(['LONG_DESCRIPTION']);

  public thumbnails = computed(() => {
    const p = this.product();
    if (!p) return [];
    const list: string[] = [];
    p.imageList.forEach(img => {
      if (img.url) list.push(img.url);
      if (img.thumbnails) {
        img.thumbnails.forEach(t => {
          if (t && !list.includes(t)) list.push(t);
        });
      }
    });
    return list;
  });

  public related = computed(() => {
    const p = this.product();
    if (!p) return [];
    return this.productService.getRelatedProducts(p, 5);
  });

  public productCategory = computed(() => {
    const p = this.product();
    if (!p || !p.categoryList?.length) return undefined;
    const firstCategory = p.categoryList[0];
    return firstCategory.name || firstCategory.categories?.[0]?.name || undefined;
  });

  private readonly categoryRouteMap: Record<string, string> = {
    todos: 'todos',
    'mama-y-bebe': 'mama-y-bebe',
    farmacia: 'farmacia',
    dermocosmetica: 'dermocosmetica'
  };

  private readonly categoryLabelMap: Record<string, string> = {
    todos: 'Todos los Productos',
    'mama-y-bebe': 'Mamá y Bebé',
    farmacia: 'Farmacia',
    dermocosmetica: 'Dermocosmética'
  };

  public productCategorySlug = computed(() => {
    const p = this.product();
    if (!p || !p.categoryList?.length) return 'todos';
    const firstCategory = p.categoryList[0];
    const name = firstCategory.name.toLowerCase();
    if (name.includes('mamá') || name.includes('mama')) return 'mama-y-bebe';
    if (name.includes('farmacia')) return 'farmacia';
    if (name.includes('dermocosmetica') || name.includes('dermocosmética')) return 'dermocosmetica';
    return 'todos';
  });

  public currentCategorySlug = computed(() => {
    const routeCategory = this.route.snapshot.queryParamMap.get('fromCategory');
    if (routeCategory && this.categoryRouteMap[routeCategory]) {
      return routeCategory;
    }
    return this.productCategorySlug();
  });

  public productCategoryLabel = computed(() => {
    return this.categoryLabelMap[this.currentCategorySlug()] || 'Todos';
  });

  public productCategoryRoute = computed(() => {
    return `/categoria/${this.currentCategorySlug()}`;
  });

  public isSoldOut = computed(() => {
    const p = this.product();
    if (!p) return true;
    return p.productStatus === 'SOLD_OUT' || p.stock <= 0;
  });

  public mostSearchedProducts = computed(() => {
    const p = this.product();
    if (!p) return [];
    return this.productService.getMostSearchedProducts(8).filter(prod => prod.id !== p.id).slice(0, 4);
  });



  public details = computed(() => {
    const p = this.product();
    if (!p) return [];
    return p.details || [];
  });

  public shortDescFirst = computed(() => {
    const p = this.product();
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
    const p = this.product();
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

  public scrollToDetails() {
    if (typeof document !== 'undefined') {
      const element = document.getElementById('details-section');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }

  constructor() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.loadProduct(id);
      }
    });
  }

  private loadProduct(id: string) {
    this.isLoading.set(true);

    setTimeout(() => {
      const found = this.productService.getProductById(id);
      if (found) {
        this.product.set(found);
        this.activeImage.set(found.imageList[0]?.url || '');

        const searchQuery = this.route.snapshot.queryParamMap.get('q')?.trim();

        if (searchQuery) {
          this.productService.incrementSearchCount(found.id);
        } else {
          this.productService.incrementViewCount(found.id);
        }

        this.analyticsService.viewItem(found);
      } else {
        this.product.set(undefined);
      }
      this.isLoading.set(false);
    }, 300);
  }

  public setActiveImage(url: string) {
    this.activeImage.set(url);
  }

  public toggleAccordion(key: string) {
    const current = this.openAccordions();
    if (current.includes(key)) {
      this.openAccordions.set([]);
    } else {
      this.openAccordions.set([key]);
    }
  }

  public onImgError(event: any) {
    event.target.src = 'https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/136049X.jpg';
  }
}
