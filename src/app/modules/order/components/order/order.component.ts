import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { Product } from 'src/app/model/product/product.model';
import { CartService } from './../../../core/services/cart/cart.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit{

  products$: Observable<Product[]> //is listening all the time
  products: Product[]=[] //is listening all the time
  displayedColumns:string[]=['image','title','price','quantity','actions']


  constructor(
    private cartService:CartService
  ) {
    this.products$ = this.cartService.cart$
    this.products$.forEach(element=>{
      let hash = {};
      this.products = element.filter(o => hash[o.id] ? false : hash[o.id] = true);
      console.log(this.products);
      localStorage.setItem('cart',JSON.stringify(this.products))
      this.products = JSON.parse(localStorage.getItem('cart'));
    })
    
  }
  
  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {

  }

  deleteProduct(id:string){
    // this.productsService.deleteProduct(id)
    // .subscribe((deleted)=>{
    //   this.products = this.products.filter(product => product.id !== id)
    // })
  }

}
