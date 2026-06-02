import { Routes } from '@angular/router';
import { CatalogComponent } from './pages/catalog/catalog';
import { ProductDetailComponent } from './pages/product-detail/product-detail';
import { CartComponent } from './pages/cart/cart';
import { FavoritesComponent } from './pages/favorites/favorites';

export const routes: Routes = [
  { path: '', redirectTo: 'categoria/todos', pathMatch: 'full' },
  { path: 'categoria', redirectTo: 'categoria/todos', pathMatch: 'full' },
  { path: 'categoria/todos', component: CatalogComponent },
  { path: 'categoria/mama-y-bebe', component: CatalogComponent },
  { path: 'categoria/farmacia', component: CatalogComponent },
  { path: 'categoria/dermocosmetica', component: CatalogComponent },
  { path: 'producto/:id', component: ProductDetailComponent },
  { path: 'carrito', component: CartComponent },
  { path: 'favoritos', component: FavoritesComponent },
  { path: '**', redirectTo: 'categoria/todos' }
];
