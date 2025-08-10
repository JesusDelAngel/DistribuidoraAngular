import { Component, OnInit } from '@angular/core';
import { ProductDescriptionComponent } from "../../components/product-description/product-description.component";
import { TitleDescriptionComponent } from "../../../shared/title-description/title-description.component";
import { ButtonComponent } from "../../../shared/button/button.component";
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ProductsServiceService } from '../../../services/user/products-service.service';
import { CommonModule } from '@angular/common';
import { product } from '../../../interfaces/productInterface';

@Component({
  selector: 'app-kuul-page',
  imports: [ProductDescriptionComponent, TitleDescriptionComponent, ButtonComponent, CommonModule],
  templateUrl: './kuul-page.component.html',
  styleUrl: './kuul-page.component.scss'
})
export class KuulPageComponent implements OnInit {
  productos: product[] = []
  productosFantasia: product[] = []
  constructor(private router: Router ,private productoService: ProductsServiceService,private route: ActivatedRoute) { }

  cargarProductos(tipo: 'permanentes' | 'fantasia') {
  this.router.navigate(['productos-disponibles'], {
    queryParams: { tipo },
    relativeTo:this.route
  });
}
  
  // cargarProductos(tipo:string){
  //   this.productoService.getProductosByCategory(tipo).subscribe((data)=>{
  //     this.productos=data;
  //     console.log("Resp:",data)
  //   })
  // }


  //No tocar por ahora
  ngOnInit(): void {
    this.productoService.obtenerProductos().subscribe((data: any) => {
      console.log('Productos:', data); // <--- esto
      this.productos = data;
    });

    this.productoService.obtenerProductosFantasia().subscribe((data: product[]) => {
      console.log('Productos Fantasia:', data);
      this.productosFantasia = data;
    });
  }
}
