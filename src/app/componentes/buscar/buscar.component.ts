import { Component, OnInit } from '@angular/core';
import {MovieService} from '../../services/movie.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  buscar: string = "";


  constructor(private _movieSRV: MovieService, private _router: ActivatedRoute) {
      this._router.params.subscribe(params => {
          if(params['pelicula']){
              this.buscar = params['pelicula'];
              this.buscarPelicula();
          }
      });
  }

  ngOnInit() {
  }

  buscarPelicula() {
    if (this.buscar.length == 0) {
      return;
    }
    console.log('se busca una pelicula por su nombre');
    this._movieSRV.getBuscar(this.buscar)
      .subscribe(
      data => {
        console.log(data);
      }
      );
  }

}
