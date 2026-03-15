import { Routes } from '@angular/router';

import { Home } from './components/home/home';
import { About } from './components/about/about';
import { MovieDetails } from './components/movie-details/movie-details';

export const routes: Routes = [
    { path: '', component: Home},
    { path: 'about', component: About},
    { path: 'movie/:id', component: MovieDetails}
];
