import { Injectable } from '@angular/core';
import {Jsonp} from '@angular/http';
import 'rxjs/Rx';
import * as moment from 'moment';

@Injectable()
export class MovieService {

  resultadoBusqueda: any;

  private apikey = '0b590dd211babf3c0f8e06548b61cc15';
  private urlBase = 'https://api.themoviedb.org/3';

  constructor(private jsonp: Jsonp) { }

  getPopulares() {
    const url = `${this.urlBase}/discover/movie?sort_by=popularity.desc&api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;
    return this.jsonp.get(url).map(res => res.json());
  }

  getEnCartelera() {
    const fin = moment().format('YYYY-MM-DD');
    const inicio = moment().add(-1, 'week').format('YYYY-MM-DD');
    const url = `${this.urlBase}/discover/movie?primary_release_date.gte=${inicio}&primary_release_date.lte=${fin}&api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;
    return this.jsonp.get(url).map(res => res.json());
  }

  getPopularesKids() {
    const url = `${this.urlBase}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;
    return this.jsonp.get(url).map(res => res.json());
  }

  getBuscar(titulo: string) {
    const url = `${this.urlBase}/search/movie?query=${titulo}&sort_by=popularity.desc&api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;
    return this.jsonp.get(url).map(res => {this.resultadoBusqueda = res.json();});
  }

  getBuscarPorID(id: string) {
    if (this.resultadoBusqueda) {
      for (const peliculaTemp of this.resultadoBusqueda.results) {
        if (peliculaTemp['id'] == id) {
          return peliculaTemp;
        }
      }
    }
  }

  getBuscarPorIDRemoto(id: string) {
    const url = `${this.urlBase}/movie/${id}?api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;
    console.log(url);
    return this.jsonp.get(url).map(res => res.json());
  }
}
