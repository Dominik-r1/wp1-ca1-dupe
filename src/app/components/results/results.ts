import { Component, inject } from '@angular/core';
import { MovieapiService } from '../../services/movieapi-service/movieapi-service';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-results',
  imports: [RouterLink],
  templateUrl: './results.html',
  styleUrl: './results.css',
})
export class Results {
  movieService = inject(MovieapiService)
}
