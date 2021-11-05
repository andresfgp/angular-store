import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Product } from '../../../../model/product/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  // products: Product[]=[]

  constructor(
    private http:HttpClient
  ) { }

  getAllProducts(){
    // return this.products
    return this.http.get('https://platzi-store.herokuapp.com/products')
  }

  getProduct(id:string){
    // return this.products.find(item=>id===item.id)
    return this.http.get(`https://platzi-store.herokuapp.com/products/${id}`)
  }
}
