import { Pipe, PipeTransform } from '@angular/core';
import { Product } from 'src/app/model/product/product.model';

@Pipe({
  name: 'cartAccum'
})
export class CartAccumPipe implements PipeTransform {

  transform(productSelected: Product, products: Product[]): number {
    return products.filter((product) => productSelected.id === product.id).length;
   }

   

}
