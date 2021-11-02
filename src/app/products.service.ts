import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: Product[]=[
    {
      id: '1',
      image: 'assets/static/camiseta.png',
      title: 'Camiseta',
      price: 40000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '2',
      image: 'assets/static/hoodie.png',
      title: 'Hoodie',
      price: 30000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '3',
      image: 'assets/static/mug.png',
      title: 'Mug',
      price: 1000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '4',
      image: 'assets/static/pin.png',
      title: 'Pin',
      price: 20000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '5',
      image: 'assets/static/stickers1.png',
      title: 'Stickers',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '6',
      image: 'assets/static/stickers2.png',
      title: 'Stickers',
      price: 60000,
      description: 'bla bla bla bla bla'
    },
  ]

  constructor() { }

  getAllProducts(){
    return this.products
  }

  getProduct(id:string){
    return this.products.find(item=>id===item.id)
  }
}
