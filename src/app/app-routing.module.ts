import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {CategoryListComponent} from "./category-list/category-list.component";
import {HomepageComponent} from "./homepage/homepage.component";

const routes: Routes = [
  {path:'', component:HomepageComponent},
  {path: "categories", component: CategoryListComponent},

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
