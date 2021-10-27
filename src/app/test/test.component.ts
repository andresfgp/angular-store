import { Component } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent{

  title:string = 'store';
  power:number=10;
  items:Array<string> =["Andres","Daniela","Carlos"]

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
    }
  ]

  addItem(){
    this.items.push("New Item")
  }
  deleteItem(i:number){
    this.items.splice(i,1)
  }

  clickProduct(id:number){
    console.log('id',id);
  }

}
