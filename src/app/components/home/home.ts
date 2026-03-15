import { Component } from '@angular/core';
import { MovieDetails } from '../movie-details/movie-details';
import { MovieSearch } from '../movie-search/movie-search';
import { Results } from '../results/results';


@Component({
  selector: 'app-home',
  imports: [ MovieDetails, MovieSearch, Results],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
