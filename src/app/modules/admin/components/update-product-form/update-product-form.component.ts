import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from 'src/app/modules/core/services/products/products.service';
import { Product } from 'src/app/model/product/product.model';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';



@Component({
  selector: 'app-update-product-form',
  templateUrl: './update-product-form.component.html',
  styleUrls: ['./update-product-form.component.scss']
})
export class UpdateProductFormComponent implements OnInit {

  form:FormGroup;
  id:string;
  product: Product;

  constructor( //To create data
    private formBuilder:FormBuilder,
    private productsService:ProductsService,
    private router:Router,
    private activatedRoute:ActivatedRoute
  ) { 
    this.buildForm()
  }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void { //just to call data
    this.activatedRoute.params.subscribe((params:Params) => {
      this.id=params.id
      this.fetchProduct(this.id)
    })
  }

  fetchProduct(id:string){
    this.productsService.getProduct(id)
    .subscribe(product=>{
      this.form.patchValue(product)
    })
  }

  private buildForm(){
    this.form=this.formBuilder.group({
      title:['',[Validators.required]],
      price:['',[Validators.required]],
      image:[''],
      description:['',[Validators.required]],
    })
  }

  updateProduct(event){
    event.preventDefault()
    if(this.form.valid){
      const updateProduct:Product=this.form.value
      this.productsService.updateProduct(this.id,updateProduct)
      .subscribe(products=>this.router.navigate(['admin/products']))
    }
  }

}