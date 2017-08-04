import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit() {
  }

  buscarPelicula(pelicula: string) {
      if(pelicula.length == 0){
          return;
      }
      console.log(pelicula);
      this._router.navigate(['buscar',pelicula]);
  }

}
