import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  standalone: false,
  
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();
  //lo que hacemos con esto es poder emitir onNewCharacter, que maneja
  //objetos tipo Character

  public character: Character = {
    name: '',
    power: 0,
  };

  emitCharacter(): void {
    console.log(this.character) //para verlo en consola
    if (this.character.name.length === 0) return; //validación para que no se ingresen nombres sin caracteres
    this.onNewCharacter.emit(this.character); //emitimos onNewCharacter
    
    //vamos a limpiar los valores predeterminados por el binding
    this.character = { name: '', power: 0};
  }

}

//creamos en el AddCharacterComponent con las características de la interface
//y le damos los valores por defecto para luego asignarlas en los inputs
