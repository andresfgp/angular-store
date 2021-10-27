import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{

    // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
    ngOnInit(): void {
      //code
    }

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

  clickProduct(id:number){
    console.log('id',id);
  }


}
