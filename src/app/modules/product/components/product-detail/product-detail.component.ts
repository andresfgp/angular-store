import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from '../../../../model/product/product.model';
import { ProductsService } from '../../../core/services/products/products.service';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  constructor(private activatedRoute:ActivatedRoute,
              private productsService:ProductsService) { }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit() {
      this.activatedRoute.params.subscribe((params:Params) => {
      const id=params.id
      this.fetchProduct(id)
      // this.product= this.productsService.getProduct(id)
    })
  }
  fetchProduct(id:string){
    this.productsService.getProduct(id)
    .subscribe(product=>{this.product=product})
  }

}

