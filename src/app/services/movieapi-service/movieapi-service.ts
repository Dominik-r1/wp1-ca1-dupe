import { Injectable } from '@angular/core';
import { signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { take } from 'rxjs';
import { MovieDetails } from '../../models/moviedetails.interface';
import { SearchResults } from '../../models/moviedetails.interface';

@Injectable({
  providedIn: 'root',
})
export class MovieapiService {

  private _http = inject(HttpClient)
  private _baseUrl = "http://www.omdbapi.com/";
  private _apiKey = "a933bd5c";
  
  public movie = signal<MovieDetails | null>(null);
  public movies = signal<MovieDetails[]>([]);
  public searchResponse = signal<SearchResults | null>(null);

  currentPage = signal(1);
  totalResults= signal(0);
  currentSearch= signal('');


  //get list of movies
  getMovies(title: string, page: number = 1) {

    this.currentSearch.set(title);

    const url = this._baseUrl + "?s=" + title + "&apikey=" + this._apiKey + "&page=" + page;

    this._http.get<SearchResults>(url)
      .pipe(
        take(1)
      )
        .subscribe(data => {
          this.searchResponse.set(data);
          this.movies.set(data.Search || []);

          this.totalResults.set(parseInt(data.totalResults || '0'))
          this.currentPage.set(page);

          console.log(this.movies());
        });
  }

  //get singular movie details
  getMovie(id: string) {

    const url = this._baseUrl + "?i=" + id + "&apikey=" + this._apiKey;

    this._http.get<MovieDetails>(url)
      .pipe(take(1))
        .subscribe(data => {
          this.movie.set(data);
        });
  }

  getTotalPages() {
    return Math.ceil(this.totalResults() / 10)
  }

  nextPage() {
    if (this.currentPage() < this.getTotalPages()){
      this.getMovies(this.currentSearch(), this.currentPage() + 1)
    }
  }

  prevPage() {
  if (this.currentPage() > 1 ){
        this.getMovies(this.currentSearch(), this.currentPage() - 1)
      }
  }

  



}
