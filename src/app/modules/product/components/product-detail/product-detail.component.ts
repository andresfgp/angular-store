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

  constructor(private route:ActivatedRoute,
              private productsService:ProductsService) { }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit() {
      this.route.params.subscribe((params:Params) => {
      const id=params.id
      this.fetchProduct(id)
      // this.product= this.productsService.getProduct(id)
    })
  }
  fetchProduct(id:string){
    this.productsService.getProduct(id)
    .subscribe(product=>{this.product=product})
  }
  createProduct(){
    const newProduct:Product=    {
      id: "7",
      image: "assets/static/stickers2.png",
      title: "Stickers",
      price: 60000,
      description: "bla bla bla bla bla"
   };
    this.productsService.createProduct(newProduct)
    .subscribe(product=>{console.log(product);
    })
  }
  updateProduct(){
    const updateProduct:Product=    {
      id: "7",
      image: "assets/static/stickers2.png",
      title: "Cambio",
      price: 50000,
      description: "Cambio"
   };
    this.productsService.updateProduct("7",updateProduct)
    .subscribe(product=>{console.log(product);
    })
  }
  deleteProduct(){
    this.productsService.deleteProduct("7")
    .subscribe(product=>{console.log(product);
    })
  }

}

