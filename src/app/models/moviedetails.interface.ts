
export interface SearchResults {
    Search: MovieDetails[];
    totalResults?: string;
    Response: string;
    Error?: string;
}

export interface MovieDetails {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    imdbRating?: string;
    Poster: string;
    Runtime?: string;
    Director?: string;
    Actors?: string;
    Plot?: string;
    Response: string;
    Error?: string;
}