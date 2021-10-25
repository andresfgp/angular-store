import { Component, Input, Output, EventEmitter} from "@angular/core";
import { Product } from "../product.model";

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html'
})

export class ProductComponent {
    @Input() product: Product | undefined; //To communicate component father with child
    @Output() productClicked: EventEmitter<any> = new EventEmitter<any>(); //To communicate component child with father

    addCart(){
        console.log("añadir al carrito");
        this.productClicked.emit(this.product.id)
    }
}
