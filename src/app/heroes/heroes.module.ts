import { NgModule } from "@angular/core";
import { HeroComponent } from "./components/hero/hero.component";
import { ListComponent } from "./components/list/list.component";


@NgModule ({
    declarations: [
        HeroComponent,
        ListComponent,
    ],
    exports: [
        HeroComponent,
        ListComponent,
    ]
})

export class HeroesModule {}

    //importante mantener la buena práctica de importar CommonModule
    //dentro del NgModule
    //este módulo permite usar funciones ng
    //en este ejemplo en concreto y por la versión de Angular que uso
    //no es realmente necesario importarlo, BrowserModule en el app.module se encarga de eso
    //pero puede que se hagan proyectos donde no esté el Browser y así, además,
    //se mantiene la verdadera independiencia de funcionamiento importando CommonModule