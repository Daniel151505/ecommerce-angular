import { Injectable } from '@angular/core';
import { Product } from '../data/products-data';
import { environment } from '../../environments/environment';

declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
  }
}

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {
  constructor() {
    if (typeof window !== 'undefined' && environment.gaMeasurementId) {
      this.injectGtag(environment.gaMeasurementId);
    }
  }

  private injectGtag(measurementId: string) {
    if (typeof document === 'undefined') return;
    if (window.gtag) return;

    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      window.gtag = function() { (window.dataLayer as any).push(arguments); } as any;
      (window.gtag as any)('js', new Date());
      (window.gtag as any)('config', measurementId, { send_page_view: false });
    };
    document.head.appendChild(script);
  }


  private sendEvent(eventName: string, payload: Record<string, unknown> = {}): void {
    if (typeof window === 'undefined') return;

    window.dataLayer = window.dataLayer ?? [];

    if (typeof window.gtag === 'function') {
      window.gtag('event', eventName, payload);
    } else {
      window.dataLayer.push({ event: eventName, ...payload });
    }

    console.log(`%c[Analytics] ${eventName}`, 'color:#009639;font-weight:bold', payload);
  }

  private buildItem(product: Product, quantity = 1, presentation = 'pack', price?: number): Record<string, unknown> {
    const itemPrice = price ?? product.pricePack ?? product.price;
    const mainCategory = product.categoryList[0]?.name ?? '';
    const subCategory = product.categoryList[0]?.categories[0]?.name ?? '';

    return {
      item_id: product.id,
      item_name: product.name,
      item_brand: product.brand,
      item_category: mainCategory,
      item_category2: subCategory,
      item_variant: presentation,
      price: +itemPrice.toFixed(2),
      quantity
    };
  }

  public pageView(url: string): void {
    if (typeof window === 'undefined') return;

    this.sendEvent('page_view', {
      page_path: url,
      page_location: window.location.href,
      page_title: document.title
    });
  }

  viewItem(product: Product): void {
    const item = this.buildItem(product);
    this.sendEvent('view_item', {
      ecommerce: {
        currency: 'PEN',
        value: +item['price']!,
        items: [item]
      }
    });
  }

  addToCart(product: Product, quantity: number, presentation: string, price: number): void {
    const item = this.buildItem(product, quantity, presentation, price);
    this.sendEvent('add_to_cart', {
      ecommerce: {
        currency: 'PEN',
        value: +(price * quantity).toFixed(2),
        items: [item]
      }
    });
  }

  removeFromCart(product: Product, quantity: number, presentation: string, price: number): void {
    const item = this.buildItem(product, quantity, presentation, price);
    this.sendEvent('remove_from_cart', {
      ecommerce: {
        currency: 'PEN',
        value: +(price * quantity).toFixed(2),
        items: [item]
      }
    });
  }

  viewItemList(products: Product[], listName = 'Catalog'): void {
    const items = products.slice(0, 20).map((p, i) => ({
      ...this.buildItem(p),
      index: i + 1,
      item_list_name: listName
    }));
    this.sendEvent('view_item_list', {
      ecommerce: {
        item_list_name: listName,
        items
      }
    });
  }
}
