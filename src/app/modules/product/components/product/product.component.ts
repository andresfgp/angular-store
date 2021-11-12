import {Component,
        Input,
        Output,
        EventEmitter,
        SimpleChanges} from "@angular/core";

import { Product } from "../../../../model/product/product.model";
import { CartService } from "src/app/modules/core/services/cart/cart.service";
@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})

export class ProductComponent {
    @Input() product: Product | undefined; //To communicate component father with child
    @Output() productClicked: EventEmitter<any> = new EventEmitter<any>(); //To communicate component child with father

    today=new Date();
    
    constructor(
        private cartService:CartService
    ) {
        // console.log('1. constructor');
    }

    // ngOnChanges(changes: SimpleChanges) {
    //   console.log('2. ngOnChanges');
    //   console.log(changes);
    // }

    // ngOnInit() {
    // console.log('3. ngOnInit');
    // }

    // ngDoCheck() {
    // console.log('4. ngDoCheck');
    // }

    // ngOnDestroy() {
    // console.log('5. ngOnDestroy');
    // }

    addCart(){
        console.log("añadir al carrito");
        this.cartService.addCart(this.product);
        // this.productClicked.emit(this.product.id)
    }
}
