import { AuthService } from 'src/app/modules/core/services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/modules/core/services/cart/cart.service';
import { Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  total$:Observable<number>;
  isLoggedIn$:Observable<boolean>;
  isLoggedOut$:Observable<boolean>;

  constructor(
    private cartService:CartService,
    private breakpointObserver: BreakpointObserver,
    private authService:AuthService,
    private router:Router
  ) { 
    this.total$=this.cartService.cart$
    .pipe(
      map(products=>products.length)
    )
    this.isLoggedIn$=this.authService.hasUser().pipe(
      map(user=>user===null?false:true)
    )
    this.isLoggedOut$=this.authService.hasUser().pipe(
      map(user=>user===null?true:false)
    )
  }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {
  }

  logout(){
    this.authService.logout()
    .then(()=>{
      this.router.navigate(['./home'])
    })
  }

}
