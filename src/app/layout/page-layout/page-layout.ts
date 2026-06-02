import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header';
import { FooterComponent } from '../../components/footer/footer';
import { CartDrawerComponent } from '../../components/cart-drawer/cart-drawer';

@Component({
  selector: 'app-page-layout',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent, CartDrawerComponent],
  templateUrl: './page-layout.html'
})
export class PageLayoutComponent {}
