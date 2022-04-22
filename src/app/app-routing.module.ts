import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {CategoryListComponent} from "./category-list/category-list.component";
import {ProductComponent} from "./product/product.component";
import {HomepageComponent} from "./homepage/homepage.component";
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {UserComponent} from "./user/user.component";
import {CartComponent} from "./cart/cart.component";
import {AboutComponent} from "./about/about.component";
import {PhoneCaseComponent} from "./phone-case/phone-case.component";
import {ScreenProtectorComponent} from "./screen-protector/screen-protector.component";
import {HeadphoneComponent} from "./headphone/headphone.component";
import {ChargerComponent} from "./charger/charger.component";

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: "categories", component: CategoryListComponent},
  {path: "product", component: ProductComponent},
  {path: "register", component: RegisterComponent},
  {path: "login", component: LoginComponent},
  {path: "users", component: UserComponent},
  {path: "home", component: HomepageComponent},
  {path: "cart", component: CartComponent},
  {path: "about", component: AboutComponent},
  {path: "phone-case", component: PhoneCaseComponent},
  {path: "screen-protector", component: ScreenProtectorComponent},
  {path: "headphone", component: HeadphoneComponent},
  {path: "charger", component: ChargerComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
