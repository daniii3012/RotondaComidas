import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

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
import { CarouselComponent } from './components/home/carousel/carousel.component';
import { ItemCategoriesComponent } from './components/home/item-categories/item-categories.component';
import { RestaurantsComponent } from './pages/restaurants/restaurants.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductComponent } from './pages/products/product/product.component';
import { RestaurantComponent } from './pages/restaurants/restaurant/restaurant.component';

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
    AdminMenuComponent,
    CarouselComponent,
    ItemCategoriesComponent,
    RestaurantsComponent,
    ProductsComponent,
    ProductComponent,
    RestaurantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
