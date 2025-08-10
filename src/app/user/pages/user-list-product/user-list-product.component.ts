import { Component } from '@angular/core';
import { ProductDescriptionComponent } from "../../components/product-description/product-description.component";
import { TitleDescriptionComponent } from "../../../shared/title-description/title-description.component";
import { product } from '../../../interfaces/productInterface';
import { ProductsServiceService } from '../../../services/user/products-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-list-product',
  imports: [TitleDescriptionComponent, ProductDescriptionComponent],
  templateUrl: './user-list-product.component.html',
  styleUrl: './user-list-product.component.scss'
})
export class UserListProductComponent {

  allproducts: any[] = [];

  constructor(
    // private router: Router, 
    private route: ActivatedRoute,
    private productoService: ProductsServiceService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const tipo = params['tipo'];

      if (tipo === 'permanentes') {
        this.productoService.obtenerProductos().subscribe(data => {
          this.allproducts = data;
        });
      } else if (tipo === 'fantasia') {
        this.productoService.obtenerProductosFantasia().subscribe(data => {
          this.allproducts = data;
        });
      }
    });
  }

  // cargarProducto(tipo:string){
  //   this.productService.getProductosByCategory(tipo).subscribe((data)=>{
  //     this.allproducts=data;
  //   })
  // }

}
