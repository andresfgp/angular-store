import { Observable } from 'rxjs';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/modules/core/services/auth/auth.service';
import { User } from 'src/app/model/user/user.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  notValidUser$: Observable<User>

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.buildForm();
  }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit() {
  }

  login(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const value = this.form.value;
      this.authService.login(value.email, value.password)
      .then(()=>{
        this.router.navigate(['/admin']);
      })
      .catch(() => {
        alert('no es valido');
      });
    }
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

}