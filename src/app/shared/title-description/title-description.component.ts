import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title-description',
  imports: [],
  templateUrl: './title-description.component.html',
  styleUrl: './title-description.component.scss'
})
export class TitleDescriptionComponent {

    @Input() title: string = ''; // recibe el título desde el HTML padre
    @Input() subtitle: string = ''; // recibe el título desde el HTML padre


}
