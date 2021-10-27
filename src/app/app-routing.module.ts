import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {  
    path:'home',
    component: HomeComponent,
  },
  {  
    path:'products',
    component: ProductsComponent,
  },
  {  
    path:'contact',
    component: ContactComponent,
  },
  {  
    path:'test',
    component: TestComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
