import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/modules/core/services/cart/cart.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  total$:Observable<number>;

  constructor(
    private cartService:CartService
  ) { 
    this.total$=this.cartService.cart$
    .pipe(
      map(products=>products.length)
    )
  }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {
  }

}
