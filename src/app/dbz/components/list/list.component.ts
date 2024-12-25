import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  standalone: false,
  
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input()
  public characterList: Character[] = []

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  OnDeleteCharacter(id?: string): void {
    if (!id) return;
    this.onDelete.emit(id);
  }

}

//la idea es crear el listado de manera dinámica, así que crearemos un characterList
//para luego usar un ngFor en el html de list component

//para permitir la comunicación de mi list component con main page
//agregamos el decorador @Input() sobre la propiedad
//con esto estamos diciendo que nuestra ListComponent puede recibir una propiedad
//llamada characterList. Lo que queda dentro del characterList sería el valor
//por defecto en caso que no reciba nada.
//Para expresar esto en el html, vamos a main page component y llamamos
//dentro del dbz-list llamo con llaves cuadradadas a la propiedad,
//y le damos el valor que necesita
