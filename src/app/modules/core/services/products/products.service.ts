import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../../../../model/product/product.model';
import { environment } from 'src/environments/environment';

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
    return this.http.get<Product[]>(environment.url_api)
  }

  getProduct(id:string){
    // return this.products.find(item=>id===item.id)
    return this.http.get<Product>(`${environment.url_api}${id}`)
  }

  createProduct(product:Product){
    return this.http.post(`${environment.url_api}`,product)
  }
  updateProduct(id:string,change: Partial<Product>){
    return this.http.put(`${environment.url_api}${id}`,change)
  }
  deleteProduct(id:string){
    return this.http.delete(`${environment.url_api}${id}`)
  }
}
