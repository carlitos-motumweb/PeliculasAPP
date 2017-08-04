import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mostrarImagen'
})
export class MostrarImagenPipe implements PipeTransform {

  transform(pelicula: any): any {
      const urlBase = 'http://image.tmdb.org/t/p/w500/';

      if (pelicula.backdrop_path) {
          return `${urlBase}/${pelicula.backdrop_path}`;
      }else if (pelicula.poster_path) {
          return `${urlBase}/${pelicula.poster_path}`;
      }else {
          return 'assets/img/no-image.png';
      }

  }

}
