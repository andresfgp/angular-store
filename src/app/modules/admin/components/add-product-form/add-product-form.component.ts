import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from 'src/app/modules/core/services/products/products.service';
import { Product } from 'src/app/model/product/product.model';
import { Router } from '@angular/router';
import { MyValidators } from './../../../../utils/validators';


@Component({
  selector: 'app-add-product-form',
  templateUrl: './add-product-form.component.html',
  styleUrls: ['./add-product-form.component.scss']
})
export class AddProductFormComponent implements OnInit {

  form:FormGroup;

  constructor( //To create data
    private formBuilder:FormBuilder,
    private productsService:ProductsService,
    private router:Router
  ) { 
    this.buildForm()
  }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void { //just to call data
  }

  private buildForm(){
    this.form=this.formBuilder.group({
      id:['',[Validators.required]],
      title:['',[Validators.required]],
      price:['',[Validators.required,MyValidators.isPriceValid]],
      image:[''],
      description:['',[Validators.required]],
    })
  }

  saveProduct(event){
    event.preventDefault()
    if(this.form.valid){
      const newProduct:Product=this.form.value
      this.productsService.createProduct(newProduct)
      .subscribe(products=>this.router.navigate(['admin/products']))
    }
  }
  get priceField() {
    return this.form.get('price');
  }
}
