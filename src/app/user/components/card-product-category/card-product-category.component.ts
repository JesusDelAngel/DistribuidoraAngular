import { Component, Input } from '@angular/core';
import { ButtonComponent } from "../button/button.component";
import { HeaderComponent } from "../../../shared/header/header.component";
import { FooterComponent } from "../../../shared/footer/footer.component";
import { RouterLink, RouterOutlet } from '@angular/router';
import { PageDescriptionComponent } from "../page-description/page-description.component";
import { marca } from '../../../interfaces/marcaInterface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-product-category',
  standalone: true,
  imports: [ButtonComponent, RouterLink,CommonModule],
  templateUrl: './card-product-category.component.html',
  styleUrl: './card-product-category.component.scss'
})
export class CardProductCategoryComponent {
@Input() marcas: marca[]=[];

getImageUrl(imgMarca: string): string {
  return `http://localhost:3000/uploads/${imgMarca}`;
}
}
