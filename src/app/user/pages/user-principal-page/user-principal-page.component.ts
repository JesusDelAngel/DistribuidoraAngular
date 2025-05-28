import { Component } from '@angular/core';
import { CardProductCategoryComponent } from "../../components/card-product-category/card-product-category.component";
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-principal-page',
  imports: [RouterOutlet,CommonModule],
  templateUrl: './user-principal-page.component.html',
  styleUrl: './user-principal-page.component.scss'
})
export class UserPrincipalPageComponent {

}
