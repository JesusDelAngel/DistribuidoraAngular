import { Component, OnInit } from '@angular/core';
import { ProductDescriptionComponent } from "../../components/product-description/product-description.component";
import { TitleDescriptionComponent } from "../../../shared/title-description/title-description.component";
import { ButtonComponent } from "../../../shared/button/button.component";
import { RouterLink } from '@angular/router';
import { ProductsServiceService } from '../../../services/user/products-service.service';
import { CommonModule } from '@angular/common';
import { product } from '../../../interfaces/productInterface';

@Component({
  selector: 'app-kuul-page',
  imports: [ProductDescriptionComponent, TitleDescriptionComponent, ButtonComponent, RouterLink, CommonModule],
  templateUrl: './kuul-page.component.html',
  styleUrl: './kuul-page.component.scss'
})
export class KuulPageComponent implements OnInit {
   productos: product[] = []
    constructor(private productoService: ProductsServiceService) { }
  
    ngOnInit(): void {
      this.productoService.obtenerProductos().subscribe((data: any) => {
          console.log('Productos:', data); // <--- esto
    this.productos = data;
  });
      // .subscribe(data => {
      //   this.productos = data;
      //   console.log(data)
      // });
  
    }
}
