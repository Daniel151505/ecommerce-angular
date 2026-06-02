import { Component, signal } from '@angular/core';
import { Router, RouterOutlet, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
import { HeaderComponent } from './components/header/header';
import { FooterComponent } from './components/footer/footer';
import { CartDrawerComponent } from './components/cart-drawer/cart-drawer';
import { AnalyticsService } from './services/analytics.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, CartDrawerComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ecommerce-angular');

  constructor(
    private readonly router: Router,
    private readonly analyticsService: AnalyticsService
  ) {
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event) => {
      this.analyticsService.pageView(event.urlAfterRedirects);
    });
  }
}

