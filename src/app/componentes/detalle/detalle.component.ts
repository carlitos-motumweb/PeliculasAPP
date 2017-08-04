import { Component, OnInit } from '@angular/core';
import {MovieService} from '../../services/movie.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  peliculaSeleccionada: any;
  idPelicula: any;
  pagRegresar: any;

  constructor(private _movieSRV: MovieService,
    private _route: ActivatedRoute) {
        this._route.params
        .subscribe(parametros => {
            if(parametros['regresar']){
                this.pagRegresar = parametros['regresar'];
            }else{
                this.pagRegresar = 'home';
            }
            if(parametros['id']){
                this.idPelicula = parametros['id'];
                console.log("id:" + this.idPelicula);
                this._movieSRV.getBuscarPorIDRemoto(this.idPelicula).subscribe(res => this.peliculaSeleccionada = res);
                // this.peliculaSeleccionada = _movieSRV.getBuscarPorID(this.idPelicula);
                // if(!this.peliculaSeleccionada){
                //
                // }
                console.log(this.peliculaSeleccionada);
            }
        })
     }

  ngOnInit() {
  }

}
