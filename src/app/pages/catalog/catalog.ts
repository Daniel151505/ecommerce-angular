import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { ProductCardComponent } from '../../components/product-card/product-card';
import { CatalogBannerComponent } from '../../components/catalog-banner/catalog-banner';
import { BreadcrumbsComponent } from '../../components/breadcrumbs/catalog-breadcrumbs';
import { CatalogFiltersComponent } from '../../components/catalog-filters/catalog-filters';
import { CategoryMostViewedComponent } from '../../components/category-most-viewed/category-most-viewed';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [CommonModule, ProductCardComponent, CatalogBannerComponent, BreadcrumbsComponent, CatalogFiltersComponent, CategoryMostViewedComponent],
  templateUrl: './catalog.html',
  styleUrl: './catalog.css'
})
export class CatalogComponent {
  public productService = inject(ProductService);
  private cartService = inject(CartService);
  private route = inject(ActivatedRoute);
  public router = inject(Router);

  public searchQuery = signal<string>('');
  public activeFilter = signal<string>('');
  public selectedBrands = signal<string[]>([]);
  public selectedPresentations = signal<string[]>([]);
  public selectedSubcategories = signal<number[]>([]);
  public sortBy = signal<string>('popularity');

  public slideIndex = signal<number>(0);

  public presentations = [
    { label: 'Cajas / Paquetes', value: 'pack' },
    { label: 'Blíster / Fraccionados', value: 'blister' },
    { label: 'Bolsa', value: 'bag' }
  ];

  public brands = computed(() => this.productService.getBrands());

  public subcategories = computed(() => {
    const subMap = new Map<number, { name: string; count: number }>();
    const baseProducts = this.productService.getProducts();
    baseProducts.forEach(p => {
      p.categoryList.forEach(cat => {
        cat.categories.forEach(sub => {
          const existing = subMap.get(sub.id);
          if (existing) {
            existing.count += 1;
          } else {
            subMap.set(sub.id, { name: sub.name, count: 1 });
          }
        });
      });
    });
    return Array.from(subMap.entries()).map(([id, val]) => ({
      id,
      name: val.name,
      count: val.count
    }));
  });

  public filteredProducts = computed(() => {
    let list = this.productService.getProducts();

    const query = this.searchQuery();
    if (query) {
      list = this.productService.searchProducts(query);
    }

    if (this.activeFilter() === 'favorites') {
      const favs = this.cartService.favorites();
      list = list.filter(p => favs.includes(p.id));
    }

    const selBrands = this.selectedBrands();
    if (selBrands.length > 0) {
      list = list.filter(p => selBrands.includes(p.brand.trim().toUpperCase()));
    }

    const selPres = this.selectedPresentations();
    if (selPres.length > 0) {
      list = list.filter(p => {
        const type = p.presentation.toLowerCase();
        return selPres.some(sp => {
          if (sp === 'pack') return type === 'caja' || type === 'paquete';
          if (sp === 'blister') return type === 'blister' || type === 'blíster' || p.fractionalMode;
          if (sp === 'bag') return type === 'bolsa';
          return false;
        });
      });
    }

    const selSubcats = this.selectedSubcategories();
    if (selSubcats.length > 0) {
      list = list.filter(p =>
        p.categoryList.some(cat =>
          cat.categories.some(sub => selSubcats.includes(sub.id))
        )
      );
    }

    return list;
  });

  public sortedProducts = computed(() => {
    const list = [...this.filteredProducts()];
    if (this.sortBy() === 'price-asc') {
      return list.sort((a, b) => a.price - b.price);
    }
    if (this.sortBy() === 'price-desc') {
      return list.sort((a, b) => b.price - a.price);
    }
    if (this.sortBy() === 'name-asc') {
      return list.sort((a, b) => a.name.localeCompare(b.name));
    }
    return list.sort((a, b) => (a.ranking ?? 999) - (b.ranking ?? 999));
  });

  public featuredProducts = computed(() => {
    return this.productService.getProducts()
      .filter(p => p.productStatus !== 'SOLD_OUT')
      .sort((a, b) => {
        const countB = this.productService.getViewCount(b.id);
        const countA = this.productService.getViewCount(a.id);
        if (countA !== countB) {
          return countB - countA;
        }
        return (a.ranking ?? 999) - (b.ranking ?? 999);
      })
      .slice(0, 9);
  });

  public categoryBanner = computed(() => {
    const cat = this.productService.selectedCategory();
    if (this.activeFilter() === 'favorites') {
      return {
        title: 'Mis Favoritos',
        description: 'Tus productos seleccionados y guardados para comprar de manera rápida y sencilla.',
        image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200&auto=format&fit=crop',
        colorFrom: '#005c24'
      };
    }
    if (cat === 'mama-y-bebe') {
      return {
        title: 'Mamá y Bebé',
        description: 'Encuentra los mejores productos para el cuidado de tu bebé con marcas líderes como Huggies, Ninet, Babysec y más con descuentos exclusivos online.',
        image: 'https://images.unsplash.com/photo-1544161513-0179fe746fd5?q=80&w=1200&auto=format&fit=crop',
        colorFrom: '#005c24'
      };
    } else if (cat === 'farmacia') {
      return {
        title: 'Farmacia',
        description: 'Cuida de tu salud y la de tu familia con medicamentos recetados, de venta libre, genéricos y más con la garantía de siempre.',
        image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=1200&auto=format&fit=crop',
        colorFrom: '#005c24'
      };
    } else if (cat === 'dermocosmetica') {
      return {
        title: 'Dermocosmética',
        description: 'Lo mejor para el cuidado de la piel sensible de tu rostro y cuerpo con tratamientos avanzados de La Roche-Posay, Vichy, Cerave y más marcas expertas.',
        image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1200&auto=format&fit=crop',
        colorFrom: '#005c24'
      };
    }
    return {
      title: 'Todos los Productos',
      description: 'Miles de productos de salud, bienestar y belleza con precios bajos todos los días en la farmacia líder del Perú.',
      image: 'https://images.unsplash.com/photo-1607619056574-7b8d304f2c38?q=80&w=1200&auto=format&fit=crop',
      colorFrom: '#005c24'
    };
  });

  constructor() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.updateCategoryFromUrl();
    });

    this.updateCategoryFromUrl();

    this.route.queryParams.subscribe(params => {
      if (params['q']) {
        this.searchQuery.set(params['q']);
      } else {
        this.searchQuery.set('');
      }

      if (params['filter']) {
        this.activeFilter.set(params['filter']);
      } else {
        this.activeFilter.set('');
      }

      this.slideIndex.set(0);
    });
  }

  private updateCategoryFromUrl() {
    const url = this.router.url;
    if (url.includes('mama-y-bebe')) {
      this.productService.selectedCategory.set('mama-y-bebe');
    } else if (url.includes('farmacia')) {
      this.productService.selectedCategory.set('farmacia');
    } else if (url.includes('dermocosmetica')) {
      this.productService.selectedCategory.set('dermocosmetica');
    } else {
      this.productService.selectedCategory.set('todos');
    }
  }

  public onFiltersChange(filters: {
    searchQuery: string;
    selectedSubcategories: number[];
    selectedPresentations: string[];
    selectedBrands: string[];
  }) {
    this.searchQuery.set(filters.searchQuery);
    this.selectedSubcategories.set(filters.selectedSubcategories);
    this.selectedPresentations.set(filters.selectedPresentations);
    this.selectedBrands.set(filters.selectedBrands);
  }

  public clearFilters() {
    this.selectedBrands.set([]);
    this.selectedPresentations.set([]);
    this.selectedSubcategories.set([]);
    this.sortBy.set('popularity');
  }

  public clearSearch() {
    this.searchQuery.set('');
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { q: null },
      queryParamsHandling: 'merge'
    });
  }

  public onSortChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.sortBy.set(target.value);
  }

  public slideNext() {
    const totalSlides = Math.ceil(this.featuredProducts().length / 3);
    this.slideIndex.update(idx => (idx + 1) % totalSlides);
  }

  public slidePrev() {
    const totalSlides = Math.ceil(this.featuredProducts().length / 3);
    this.slideIndex.update(idx => (idx - 1 + totalSlides) % totalSlides);
  }
}
