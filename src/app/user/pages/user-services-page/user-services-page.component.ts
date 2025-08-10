import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonComponent } from "../../components/button/button.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-services-page',
  imports: [],
  templateUrl: './user-services-page.component.html',
  styleUrl: './user-services-page.component.scss'
})
export class UserServicesPageComponent {
  constructor(private router: Router) { }

  images = [
    'assets/img/U1.jpg',
    'assets/img/U2.jpg',
    'assets/img/U3.jpg',
    'assets/img/U4.jpg',
    'assets/img/U5.jpg',
    'assets/img/U6.jpg'
  ];


  imagesAlasiado = [
    'assets/img/A1.jpg',
    'assets/img/A2.jpg',
    'assets/img/A3.jpg',
    'assets/img/A4.jpg',
  ];

  indexU = 0;
  indexAlasiado = 0;



    cambiarImagen(tipo: 'uñas' | 'alasiado', direccion: 'anterior' | 'siguiente') {
    if (tipo === 'uñas') {
      const length = this.images.length;
      this.indexU =
        direccion === 'anterior'
          ? (this.indexU - 1 + length) % length
          : (this.indexU + 1) % length;
    } else if (tipo === 'alasiado') {
      const length = this.imagesAlasiado.length;
      this.indexAlasiado =
        direccion === 'anterior'
          ? (this.indexAlasiado - 1 + length) % length
          : (this.indexAlasiado + 1) % length;
    }
  }
}


  // prevImage() {
  //   this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  // }

  // nextImage() {
  //   this.currentIndex = (this.currentIndex + 1) % this.images.length;
  // }



