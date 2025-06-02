import { Component } from '@angular/core';
import { ButtonComponent } from "../button/button.component";
import { HeaderComponent } from "../../../shared/header/header.component";
import { FooterComponent } from "../../../shared/footer/footer.component";
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-card-product-category',
  imports: [ButtonComponent,RouterLink],
  // , ButtonComponent
  templateUrl: './card-product-category.component.html',
  styleUrl: './card-product-category.component.scss'
})
export class CardProductCategoryComponent {

}
