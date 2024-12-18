import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  standalone: false,
  
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroNames: string[] = ['Spoidermon', 'Hulk', 'Ironman', 'Hawk']
  public deletedHero?: string; //para sacar deletedHero del scope de la función, lo creamos como propiedad de la clase con string vacío o opcional

  removeLastHeroe(): void {
    this.deletedHero = this.heroNames.pop();
  }

}
