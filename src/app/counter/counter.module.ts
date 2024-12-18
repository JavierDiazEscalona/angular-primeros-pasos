import { NgModule } from "@angular/core";
import { CounterComponent } from "./components/counter/counter.component";

@NgModule({
    declarations: [
        CounterComponent
    ],
    exports: [
        CounterComponent
    ]
})
export class CounterModule {}

//Lo que hacemos es crear un modulo para counter, desde donde manejar
//todos los componentes que puedan existir en Counter
//hay que declrar el CounterComponent, como se muestra. Las importaciones
//se hacen automáticamente
//luego, hay que exportarlo mediante exports para usarse fuera del scope de counter
//luego, en app module hay que importar en imports el CounterModule
//ahí estamos listos, y podemos usar desde un módulo, muchos componentes
//entonces ahorramos muchas líneas de código porque se simplifica el import