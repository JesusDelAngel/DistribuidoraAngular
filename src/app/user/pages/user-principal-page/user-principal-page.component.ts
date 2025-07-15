import { Component } from '@angular/core';
import { CardProductCategoryComponent } from "../../components/card-product-category/card-product-category.component";
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../../../shared/header/header.component";
import { FooterComponent } from "../../../shared/footer/footer.component";
import { PageDescriptionComponent } from "../../components/page-description/page-description.component";

@Component({
  selector: 'app-user-principal-page',
  imports: [RouterOutlet, CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './user-principal-page.component.html',
  styleUrl: './user-principal-page.component.scss'
})
export class UserPrincipalPageComponent {

}
