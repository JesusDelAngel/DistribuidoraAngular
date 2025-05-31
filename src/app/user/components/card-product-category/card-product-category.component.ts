import { Component } from '@angular/core';
import { ButtonComponent } from "../button/button.component";
import { HeaderComponent } from "../../../shared/header/header.component";

@Component({
  selector: 'app-card-product-category',
  imports: [ButtonComponent, HeaderComponent],
  templateUrl: './card-product-category.component.html',
  styleUrl: './card-product-category.component.scss'
})
export class CardProductCategoryComponent {

}
