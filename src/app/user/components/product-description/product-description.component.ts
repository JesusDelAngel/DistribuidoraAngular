import { Component, Input, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgBrokenDirective } from '../../../shared/directives/img-broken.directive';
import { product } from '../../../interfaces/productInterface';

@Component({
  selector: 'app-product-description',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-description.component.html',
  styleUrl: './product-description.component.scss'
})
export class ProductDescriptionComponent {
@Input() productos: product[] = [];
// @Input() productosFantasia: product[] =[];

getImageUrl(img: string): string {
  return `http://localhost:3000/uploads/${img}`;
}
}
