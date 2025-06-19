import { Component } from '@angular/core';
import { ProductDescriptionComponent } from "../../components/product-description/product-description.component";
import { TitleDescriptionComponent } from "../../../shared/title-description/title-description.component";

@Component({
  selector: 'app-kuul-page',
  imports: [ProductDescriptionComponent, TitleDescriptionComponent],
  templateUrl: './kuul-page.component.html',
  styleUrl: './kuul-page.component.scss'
})
export class KuulPageComponent {

}
