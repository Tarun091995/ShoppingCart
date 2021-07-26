import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { HeaderComponent } from './header/header.component';
import { HomecomponentComponent } from './homecomponent/homecomponent.component';
import { Routes,RouterModule } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { ProductComponent } from './product/product.component';
import { ResolverserviceService } from './resolverservice.service';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from './search.pipe';
import { CartComponent } from './cart/cart.component';
import { ReactiveFormsModule } from '@angular/forms';



const routers: Routes = [
  { path: "", component: HomecomponentComponent },
  { path: "category/:id", component: CategoriesComponent,resolve: {products: ResolverserviceService} },
  { path: "product/:id", component: ProductComponent ,resolve: {products: ResolverserviceService}},
  { path: "login", component: LoginComponent },
  { path: "cart", component: CartComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomecomponentComponent,
    CategoriesComponent,
    ProductComponent,
    LoginComponent,
    SearchPipe,
    CartComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routers),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
