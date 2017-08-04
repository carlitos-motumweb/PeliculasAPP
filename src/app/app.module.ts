import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule} from '@angular/http';
import { FormsModule} from '@angular/forms';

import { APP_ROUTING} from './app.routes';

import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/shared/navbar/navbar.component';
import { HomeComponent } from './componentes/home/home.component';
import { AboutComponent } from './componentes/about/about.component';
import { DetalleComponent } from './componentes/detalle/detalle.component';
import { Page404Component } from './componentes/page404/page404.component';

import {MovieService} from './services/movie.service';
import { FooterComponent } from './componentes/shared/footer/footer.component';
import { BuscarComponent } from './componentes/buscar/buscar.component';
import { MostrarImagenPipe } from './pipes/mostrar-imagen.pipe';
import { GaleriaComponent } from './componentes/home/galeria.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    DetalleComponent,
    Page404Component,
    FooterComponent,
    BuscarComponent,
    MostrarImagenPipe,
    GaleriaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    APP_ROUTING
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
