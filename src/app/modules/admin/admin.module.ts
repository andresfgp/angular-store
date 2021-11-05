import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../material/material.module';
import { NavComponent } from './components/nav/nav.component';
import { TableComponent } from './components/table/table.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { AddProductFormComponent } from './components/add-product-form/add-product-form.component';
import { UpdateProductFormComponent } from './components/update-product-form/update-product-form.component';

@NgModule({
  declarations: [NavComponent, TableComponent, DashboardComponent, ProductListComponent, AddProductFormComponent, UpdateProductFormComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
  ]
})
export class AdminModule { }
