import { Component, inject, OnInit } from '@angular/core';
import { MovieapiService } from '../../services/movieapi-service/movieapi-service';
import { input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  imports: [RouterLink],
  templateUrl: './movie-details.html',
  styleUrl: './movie-details.css',
})
export class MovieDetails {
  movieService = inject(MovieapiService)

  protected id = input.required<string>();

  ngOnInit() {
    let movieID = this.id();
    this.movieService.getMovie(movieID);
  }
}
