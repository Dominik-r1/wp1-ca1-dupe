import { Component } from '@angular/core';
import { MovieapiService } from '../../services/movieapi-service/movieapi-service';
import { inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-movie-search',
  imports: [FormsModule],
  templateUrl: './movie-search.html',
  styleUrl: './movie-search.css',
})
export class MovieSearch {

  protected title: string = '';

  //declare method in service
  apiservice=inject(MovieapiService);

  //use method from service here
  getMovie() {
    this.apiservice.getMovies(this.title)
  }
}
