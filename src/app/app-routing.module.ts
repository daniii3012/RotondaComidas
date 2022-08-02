import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminIngredientComponent } from './pages/admin/admin-ingredient/admin-ingredient.component';
import { AdminMenuComponent } from './pages/admin/admin-menu/admin-menu.component';
import { AdminProductComponent } from './pages/admin/admin-product/admin-product.component';
import { AdminRestaurantComponent } from './pages/admin/admin-restaurant/admin-restaurant.component';
import { AdminComponent } from './pages/admin/admin.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/user/login/login.component';
import { RegisterComponent } from './pages/user/register/register.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'admin-restaurant', component: AdminRestaurantComponent },
  { path: 'admin-ingredient', component: AdminIngredientComponent },
  { path: 'admin-product', component: AdminProductComponent },
  { path: 'admin-menu', component: AdminMenuComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
