import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ExponentialPipe } from './pipes/exponential/exponential.pipe';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    ExponentialPipe,
    HeaderComponent,
    FooterComponent,
  ],
  exports: [
    ExponentialPipe,
    HeaderComponent, 
    FooterComponent, 
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
})
export class SharedModule { }
