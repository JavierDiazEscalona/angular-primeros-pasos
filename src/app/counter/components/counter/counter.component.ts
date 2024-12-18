// import { Component } from "@angular/core";

// @Component({
//     standalone: false, //tuve que declarar standalone: false para que funcionase
//     selector: 'app-counter', //nombre del componente, siempre con prefijo
//     template: '<h1>Hola Counter</h1>',
// template es recomendado para 4 líneas máximo, sino, templateUrl, que es lo del snipet
// }) //mi clase necesita del decorador Component para que sea componente

// export class CounterComponent {

// }
// Todo esto hecho a mano, ahora con el snipet a-component, donde hay que borrar cosas --->

import { Component } from '@angular/core';

@Component({
    standalone: false,
    selector: 'app-counter',
    template: `
        <h3>Counter: {{ counter }}</h3>
        <button (click)="increaseBy(1)">+1</button> <!-- click para que se accione mediante click -->
        <button (click)="resetCounter()">Reset</button>
        <button (click)="increaseBy(-1)">-1</button>

    `
})

export class CounterComponent {

        public title: string = 'Hola Mundo';
        public counter: number = 10;
      
        increaseBy( value: number ): void {
          this.counter += value;
        }
      
        resetCounter(): void {
          this.counter = 10;
    }

}
