import { Component } from '@angular/core';

@Component({ //este decorador transforma la clase en un componente
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  public title: string = 'Hola Mundo'
}
