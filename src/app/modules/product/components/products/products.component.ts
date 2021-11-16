import { Component, OnInit } from '@angular/core';
import { Product } from '../../../../model/product/product.model';
import { ProductsService } from '../../../core/services/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{

  products: Product[]=[];
  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    // this.products = this.productsService.getAllProducts();
    // console.log(this.products);
    this.fetchProducts()
  }

  fetchProducts(){
    this.productsService.getAllProducts()
    .subscribe(products=>{
      this.products=products;
    })
  }
}
