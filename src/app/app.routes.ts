import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { AboutComponent } from './componentes/about/about.component';
import { DetalleComponent } from './componentes/detalle/detalle.component';
import { BuscarComponent } from './componentes/buscar/buscar.component';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'buscar', component: BuscarComponent },
    { path: 'buscar/:pelicula', component: BuscarComponent },
    { path: 'about', component: AboutComponent },
    { path: 'detalle/:id/:regresar', component: DetalleComponent },
    { path: '**', pathMatch: 'full', redirectTo: '' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
