import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { AdminTipoPlatoComponent } from './pages/admin-tipo-plato/admin-tipo-plato.component';
import { AdminClientsComponent } from './pages/admin/admin-clients/admin-clients.component';
import { AdminIngredientComponent } from './pages/admin/admin-ingredient/admin-ingredient.component';
import { AdminMenuComponent } from './pages/admin/admin-menu/admin-menu.component';
import { AdminProductComponent } from './pages/admin/admin-product/admin-product.component';
import { AdminRestaurantComponent } from './pages/admin/admin-restaurant/admin-restaurant.component';
import { AdminComponent } from './pages/admin/admin.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductComponent } from './pages/products/product/product.component';
import { ProductsComponent } from './pages/products/products.component';
import { RestaurantComponent } from './pages/restaurants/restaurant/restaurant.component';
import { RestaurantsComponent } from './pages/restaurants/restaurants.component';
import { LoginComponent } from './pages/user/login/login.component';
import { RegisterComponent } from './pages/user/register/register.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'restaurants', component: RestaurantsComponent },
  { path: 'restaurant/:id', component: RestaurantComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'product/:id', component: ProductComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
  { path: 'admin-clients', component: AdminClientsComponent, canActivate: [AuthGuard] },
  { path: 'admin-restaurant', component: AdminRestaurantComponent, canActivate: [AuthGuard] },
  { path: 'admin-ingredient', component: AdminIngredientComponent, canActivate: [AuthGuard] },
  { path: 'admin-product', component: AdminProductComponent, canActivate: [AuthGuard] },
  { path: 'admin-menu', component: AdminMenuComponent, canActivate: [AuthGuard] },
  { path: 'admin-tipo-plato', component: AdminTipoPlatoComponent, canActivate: [AuthGuard]  },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
