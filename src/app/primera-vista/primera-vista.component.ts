import { Component } from '@angular/core';

@Component({
  selector: 'app-primera-vista',
  standalone: true,
  imports: [],
  templateUrl: './primera-vista.component.html',
  styleUrl: './primera-vista.component.css'
})
export class PrimeraVistaComponent {
  hola = "holaaa";
  media = "25 coches al dia"
}
