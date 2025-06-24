import { Component } from '@angular/core';
import { ProductDescriptionComponent } from "../../components/product-description/product-description.component";
import { TitleDescriptionComponent } from "../../../shared/title-description/title-description.component";

@Component({
  selector: 'app-user-list-product',
  imports: [ProductDescriptionComponent, TitleDescriptionComponent],
  templateUrl: './user-list-product.component.html',
  styleUrl: './user-list-product.component.scss'
})
export class UserListProductComponent {

}
