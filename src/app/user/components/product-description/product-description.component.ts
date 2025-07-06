import { Component, Input, input } from '@angular/core';
import { product } from '../../../services/user/products-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-description',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-description.component.html',
  styleUrl: './product-description.component.scss'
})
export class ProductDescriptionComponent {
@Input() productos: product[] = [];

getImageUrl(img: string): string {
  return `http://localhost:3000/uploads/${img}`;
}
}
