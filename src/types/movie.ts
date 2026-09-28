export interface Movie{
    id:number;
    title:string;
    overview:string;
    poster_path:string|null;
    backdrop_path:string|null;
    vote_average:number;
    release_data:string;
}
export interface MovieResponse{
    results:Movie[]
}

 export interface Genre{
    id:number,
    name:string
}

export interface GenreResponse{
    genres:Genre[]
}