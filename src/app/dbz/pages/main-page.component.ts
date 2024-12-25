import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { Character } from '../interfaces/character.interface';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.component.html',
    standalone: false
})

export class MainPageComponent {

    constructor (private dbzService: DbzService) {
        
    }

    get characters(): Character[] {
        return [...this.dbzService.characters];
    }

    onDeleteCharacter(id:string): void {
        this.dbzService.deleteCharacterByID(id);
    }

    onNewCharacter(character: Character): void {
        this.dbzService.addCharacter(character);
    }

}

//Lo que queremos es entregar información sobre los personajes: nombre y poder
//Para eso creamos una propiedad en el componente mediante una interface, creando
//un archivo .interface en la carpeta interfaces
//ya que le podemos entregar esas propiedades:name y power, y luego la clase
//recibe esa interface