import { Component, OnInit } from '@angular/core';
import {MovieService} from '../../services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  populares: any;
  carteleraGeneral: any;
  carteleraKids: any;


  constructor(private mvService: MovieService) {
    this.mvService.getPopulares()
      .subscribe(
      data => {
        this.populares = data;
      }
      );
    this.mvService.getEnCartelera()
      .subscribe(data => {
        this.carteleraGeneral = data;
      });
    this.mvService.getPopularesKids()
      .subscribe(data => {
        this.carteleraKids = data;
      });
  }

  ngOnInit() { }

}
