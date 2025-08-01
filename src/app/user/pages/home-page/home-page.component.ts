import { Component, OnInit } from '@angular/core';
import { PageDescriptionComponent } from "../../components/page-description/page-description.component";
import { CardProductCategoryComponent } from "../../components/card-product-category/card-product-category.component";
import { marca } from '../../../interfaces/marcaInterface';
import { MarcaServiceService } from '../../../services/user/marca-service.service';
import { CommonModule } from '@angular/common';
import { ContactoComponent } from "../../components/contacto/contacto.component";

@Component({
  selector: 'app-home-page',
  imports: [PageDescriptionComponent, CardProductCategoryComponent, CommonModule, ContactoComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit {
  marcas: marca[] = []
  constructor(private marcaService: MarcaServiceService){}

  ngOnInit(): void {
    this.marcaService.obtenerMarca().subscribe((data:any)=>{
      console.log('marcas',data)
      this.marcas = data
    })
  }

}
