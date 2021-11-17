import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ExponentialPipe } from './pipes/exponential/exponential.pipe';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { MaterialModule } from '../material/material.module';
import { CartAccumPipe } from './pipes/cart/cartAccum/cart-accum.pipe';

@NgModule({
  declarations: [
    ExponentialPipe,
    HeaderComponent,
    FooterComponent,
    CartAccumPipe,
  ],
  exports: [
    ExponentialPipe,
    HeaderComponent, 
    FooterComponent, 
    CartAccumPipe,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
})
export class SharedModule { }
