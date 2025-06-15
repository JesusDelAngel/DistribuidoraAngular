import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AuthService } from '../../../user/services/auth.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-form-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './form-login.component.html',
  styleUrl: './form-login.component.scss'
})
export class FormLoginComponent implements OnInit {
  errorSession: boolean = false
  formLogin: FormGroup = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('',
      [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(12)
      ]
    )
  });
  private authService = inject(AuthService);
  constructor(private router: Router) {
  }

  toggleOpcional() {
    this.errorSession = this.formLogin.invalid;
  }

  sendLogin(): void {
    const { email, password } = this.formLogin.value
    this.authService.sendCredentials(email, password)
      .subscribe(responseOK => {
        console.log('Sesion Iniciada correctamente',responseOK);
        const { tokenSession,data} =responseOK;
        // this.cookie.set('token', tokenSession, 4,'/')
      },
        err => {
          this.errorSession = true;
          console.log('ocurrio un error')
        })
  }
  //   }


  registrarse() {
    this.router.navigate(['auth/register'])
  }
  // sendLogin():void{
  // }
  ngOnInit(): void {
    this.formLogin = new FormGroup(
      {
        email: new FormControl('', [
          Validators.required,
          Validators.email

        ]),
        password: new FormControl('', [

          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(12)


        ]
        )
      }
    )
  }


}
