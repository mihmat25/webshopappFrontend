import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {CategoryListComponent} from "./category-list/category-list.component";
import {ProductComponent} from "./product/product.component";
import {OrderComponent} from "./order/order.component";

const routes: Routes = [
  {path: "categories", component: CategoryListComponent},
  {path: "product", component:ProductComponent},
  {path: "order", component:OrderComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
