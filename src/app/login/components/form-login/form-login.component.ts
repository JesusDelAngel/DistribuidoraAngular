import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-form-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form-login.component.html',
  styleUrl: './form-login.component.scss'
})
export class FormLoginComponent implements OnInit {
  formLogin: FormGroup = new FormGroup({});
  errorSession = false
  constructor(private router: Router) {

  }

    toggleOpcional() {
    this.errorSession = this.formLogin.invalid;
  }

  registrarse(){
  this.router.navigate(['auth/register']);
  }

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

  sendLogin():void{
    const body =this.formLogin.value
    console.log('Res:',body);
  }

}
