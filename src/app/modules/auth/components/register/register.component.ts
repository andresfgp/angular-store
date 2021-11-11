import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/modules/core/services/auth/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;

  constructor(
    private authService:AuthService,
    private router:Router,
    private formBuilder:FormBuilder
  ) {
    this.buildForm()
   }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {
  }

  register(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const value = this.form.value;
      this.authService.createUser(value.email, value.password)
        this.router.navigate(['/auth/login']);
    }
  }
  
  private buildForm(){
    this.form=this.formBuilder.group({
      email:['',[Validators.required]],
      password:['',[Validators.required]],
    })
  }

}
