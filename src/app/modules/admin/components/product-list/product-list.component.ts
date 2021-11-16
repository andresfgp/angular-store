import { Component, OnInit } from '@angular/core';
import { ProductsService } from './../../../core/services/products/products.service';
import { Product } from 'src/app/model/product/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products:Product[]=[]
  displayedColumns:string[]=['id','title','price','description','actions']

  constructor(
    private productsService:ProductsService,
  ) { }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {
    this.fetchProducts()
  }

  fetchProducts(){
    this.productsService.getAllProducts()
    .subscribe(products=>{
      this.products=products;
    })
  }
  
  deleteProduct(id:string){
    this.productsService.deleteProduct(id)
    .subscribe((deleted)=>{
      this.products = this.products.filter(product => product.id !== id)
    })
  }

}
