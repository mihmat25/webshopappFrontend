import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {CategoryListComponent} from "./category-list/category-list.component";
import {ProductComponent} from "./product/product.component";
import {OrderComponent} from "./order/order.component";
import {HomepageComponent} from "./homepage/homepage.component";
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import {UserComponent} from "./user/user.component";

const routes: Routes = [
  {path: '', component:HomepageComponent},
  {path: "categories", component: CategoryListComponent},
  {path: "product", component:ProductComponent},
  {path: "order", component:OrderComponent},
  {path: "register", component:RegisterComponent},
  {path: "login", component:LoginComponent},
  {path: "users", component:UserComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
