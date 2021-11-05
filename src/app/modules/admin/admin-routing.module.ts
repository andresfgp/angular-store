import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { TableComponent } from './components/table/table.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { AddProductFormComponent } from './components/add-product-form/add-product-form.component';
import { UpdateProductFormComponent } from './components/update-product-form/update-product-form.component';

const routes: Routes = [
  {
    path:'',
    component:NavComponent,
    children:[
      {
        path:'home',
        component:DashboardComponent,
      },
      {
        path:'inventory',
        component:TableComponent,
      },
      {
        path:'products',
        component:ProductListComponent,
      },
      {
        path:'new/product',
        component:AddProductFormComponent,
      },
      {
        path:'update/product/:id',
        component:UpdateProductFormComponent,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
