import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from "@angular/common/http";
import { HomepageComponent } from './homepage/homepage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { ProductComponent } from './product/product.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import {UserComponent} from "./user/user.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import {MatSelectModule} from '@angular/material/select';
import { NavbarComponent } from './navbar/navbar.component';
import { CartComponent } from './cart/cart.component';
import { AboutComponent } from './about/about.component';
import { PhoneCaseComponent } from './phone-case/phone-case.component';
import { CartService } from 'src/service/cart.service';
import { ScreenProtectorComponent } from './screen-protector/screen-protector.component';
import { HeadphoneComponent } from './headphone/headphone.component';
import { ChargerComponent } from './charger/charger.component';




@NgModule({
  declarations: [
    AppComponent,
    CategoryListComponent,
    ProductComponent,
    HomepageComponent,
    RegisterComponent,
    LoginComponent,
    UserComponent,
    NavbarComponent,
    CartComponent,
    AboutComponent,
    PhoneCaseComponent,
    ScreenProtectorComponent,
    HeadphoneComponent,
    ChargerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatButtonModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ],

  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
