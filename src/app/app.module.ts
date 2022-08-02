import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { UserComponent } from './pages/user/user.component';
import { LoginComponent } from './pages/user/login/login.component';
import { RegisterComponent } from './pages/user/register/register.component';
import { AdminComponent } from './pages/admin/admin.component';
import { AdminRestaurantComponent } from './pages/admin/admin-restaurant/admin-restaurant.component';
import { AdminIngredientComponent } from './pages/admin/admin-ingredient/admin-ingredient.component';
import { AdminProductComponent } from './pages/admin/admin-product/admin-product.component';
import { AdminMenuComponent } from './pages/admin/admin-menu/admin-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    UserComponent,
    LoginComponent,
    RegisterComponent,
    AdminComponent,
    AdminRestaurantComponent,
    AdminIngredientComponent,
    AdminProductComponent,
    AdminMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
