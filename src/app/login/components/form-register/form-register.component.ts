import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { passwordMatchValidator } from '../../validators/password-match.validator'
'/validators/password-match.validator'; // Ajusta el path

@Component({
  selector: 'app-form-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: './form-register.component.html',
  styleUrl: './form-register.component.scss'
})
export class FormRegisterComponent implements OnInit {
  formRegister: FormGroup = new FormGroup({});
  ngOnInit(): void {
    this.formRegister = new FormGroup(
      {
        name: new FormControl('', [
          Validators.required,
          Validators.minLength(2)
        ]),
        lastName: new FormControl('', [
          Validators.required,
          Validators.minLength(2)
        ]),

        email: new FormControl('', [
          Validators.required,
          Validators.email

        ]),
        password: new FormControl('', [

          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(12)


        ]
        ),
        passwordConfirm: new FormControl('', [

          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(12)
        ]
        )
      },{ validators: passwordMatchValidator });
    
  }

}
