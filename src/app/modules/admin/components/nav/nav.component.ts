import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuthService } from 'src/app/modules/core/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  isLoggedIn$:Observable<boolean>;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private authService:AuthService,
    private router:Router
  ) {
    this.isLoggedIn$=this.authService.hasUser().pipe(
      map(user=>user===null?false:true)
    )
  }

  logout(){
    this.authService.logout()
    .then(()=>{
      this.router.navigate(['./home'])
    })
  }
}
