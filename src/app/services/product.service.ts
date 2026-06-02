import { Injectable, signal, computed } from '@angular/core';
import { MOCK_PRODUCTS, MOCK_MAMA_BEBE, MOCK_FARMACIA, MOCK_DERMOCOSMETICA, Product } from '../data/products-data';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public selectedCategory = signal<string>('todos');
  private viewCounts = signal<Record<string, number>>(this.loadViewCounts());
  private searchCounts = signal<Record<string, number>>(this.loadSearchCounts());
  private readonly VIEW_COUNT_KEY = 'inkafarma_product_views';
  private readonly SEARCH_COUNT_KEY = 'inkafarma_product_searches';

  private productsList = computed<Product[]>(() => {
    const cat = this.selectedCategory();
    if (cat === 'mama-y-bebe') {
      return MOCK_MAMA_BEBE;
    } else if (cat === 'farmacia') {
      return MOCK_FARMACIA;
    } else if (cat === 'dermocosmetica') {
      return MOCK_DERMOCOSMETICA;
    }
    return MOCK_PRODUCTS;
  });

  public getProducts(): Product[] {
    return this.productsList();
  }

  public getProductById(id: string): Product | undefined {
    return this.productsList().find(p => p.id === id);
  }

  public getProductBySlug(slug: string): Product | undefined {
    return this.productsList().find(p => p.slug === slug);
  }

  public searchProducts(query: string): Product[] {
    if (!query || query.trim() === '') {
      return this.productsList();
    }
    const cleanQuery = query.toLowerCase().trim();
    return this.productsList().filter(p => {
      const matchName = p.name.toLowerCase().includes(cleanQuery);
      const matchBrand = p.brand.toLowerCase().includes(cleanQuery);
      const matchPrinciples = p.activePrinciples ? p.activePrinciples.some(ap => ap.toLowerCase().includes(cleanQuery)) : false;
      const matchCategories = p.categoryList.some(cat =>
        cat.name.toLowerCase().includes(cleanQuery) ||
        cat.categories.some(sub => sub.name.toLowerCase().includes(cleanQuery))
      );
      return matchName || matchBrand || matchPrinciples || matchCategories;
    });
  }

  public getRelatedProducts(product: Product, limit = 5): Product[] {
    const mainCategoryName = product.categoryList[0]?.name || '';
    return this.productsList().filter(p => {
      if (p.id === product.id) return false;
      const sameBrand = p.brand === product.brand;
      const sameCategory = p.categoryList.some(c => c.name === mainCategoryName);
      return sameBrand || sameCategory;
    }).slice(0, limit);
  }

  public getBrands(): string[] {
    const brands = this.productsList().map(p => p.brand.trim().toUpperCase());
    return Array.from(new Set(brands)).sort();
  }

  public getCategories(): { id: number; name: string; count: number }[] {
    const categoriesMap = new Map<number, { name: string; count: number }>();

    this.productsList().forEach(p => {
      p.categoryList.forEach(cat => {
        const existing = categoriesMap.get(cat.id);
        if (existing) {
          existing.count += 1;
        } else {
          categoriesMap.set(cat.id, { name: cat.name, count: 1 });
        }
      });
    });

    return Array.from(categoriesMap.entries()).map(([id, val]) => ({
      id,
      name: val.name,
      count: val.count
    }));
  }

  private loadViewCounts(): Record<string, number> {
    if (typeof window === 'undefined') {
      return {};
    }
    try {
      const raw = window.localStorage.getItem(this.VIEW_COUNT_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch {
      return {};
    }
  }

  private saveViewCounts(): void {
    if (typeof window === 'undefined') {
      return;
    }
    window.localStorage.setItem(this.VIEW_COUNT_KEY, JSON.stringify(this.viewCounts()));
  }

  private loadSearchCounts(): Record<string, number> {
    if (typeof window === 'undefined') {
      return {};
    }
    try {
      const raw = window.localStorage.getItem(this.SEARCH_COUNT_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch {
      return {};
    }
  }

  private saveSearchCounts(): void {
    if (typeof window === 'undefined') {
      return;
    }
    window.localStorage.setItem(this.SEARCH_COUNT_KEY, JSON.stringify(this.searchCounts()));
  }

  public incrementViewCount(productId: string): void {
    const current = this.viewCounts();
    const next = {
      ...current,
      [productId]: (current[productId] ?? 0) + 1
    };
    this.viewCounts.set(next);
    this.saveViewCounts();
  }

  public incrementSearchCount(productId: string): void {
    const current = this.searchCounts();
    const next = {
      ...current,
      [productId]: (current[productId] ?? 0) + 1
    };
    this.searchCounts.set(next);
    this.saveSearchCounts();
  }

  public getViewCount(productId: string): number {
    return this.viewCounts()[productId] ?? 0;
  }

  public getSearchCount(productId: string): number {
    return this.searchCounts()[productId] ?? 0;
  }

  public getMostSearchedProducts(limit = 5): Product[] {
    return this.getProducts()
      .slice()
      .sort((a, b) => {
        const searchA = this.getSearchCount(a.id);
        const searchB = this.getSearchCount(b.id);
        if (searchB !== searchA) {
          return searchB - searchA;
        }
        const viewA = this.getViewCount(a.id);
        const viewB = this.getViewCount(b.id);
        return viewB - viewA;
      })
      .slice(0, limit);
  }
}
