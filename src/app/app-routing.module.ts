import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './guard/admin/admin.guard';
import { TestComponent } from './components/test/test.component';
import { LayoutComponent } from './components/layout/layout.component';

const routes: Routes = [
  {
    path:'',
    component:LayoutComponent,
    children:[
      {
        path:'',
        pathMatch:'full',
        redirectTo:'home',
      },
      {  
        path:'home',
        // component: HomeComponent,
        loadChildren: () => import ('./modules/home/home.module').then(module=>module.HomeModule)
      },
      {  
        path:'products',
        canActivate:[AdminGuard],
        // component: ProductsComponent,
        loadChildren: () => import ('./modules/product/product.module').then(module=>module.ProductModule)
      },
      // {  
      //   path:'products/:id',
      //   component: ProductDetailComponent,
      // },
      {  
        path:'contact',
        canActivate:[AdminGuard],
        // component: ContactComponent,
        loadChildren: () => import ('./modules/contact/contact.module').then(module=>module.ContactModule)
      },
    ]
  },
  {  
    path:'test',
    component: TestComponent,
  },
  {
    path:'admin',
    // component:PageNotFoundComponent,
    loadChildren: () => import ('./modules/admin/admin.module').then(module=>module.AdminModule)
  },
  {
    path:'**',
    // component:PageNotFoundComponent,
    loadChildren: () => import ('./modules/page-not-found/page-not-found.module').then(module=>module.PageNotFoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    preloadingStrategy:PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
