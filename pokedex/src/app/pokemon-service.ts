import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Pokemon } from './pokemon';
import { ApiResponse } from './api-response';
import { Poke } from './poke';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  httpClient = inject(HttpClient);
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon'

  getAllPokemons(offset: number, limit:number): Observable<Pokemon[]>{
    const pokemons = this.httpClient.get<ApiResponse>(this.apiUrl + `?limit=${limit}&offset=${offset}`).pipe(map(Response => Response.results));
    return pokemons;
  }

  getPokemonById(id: number): Observable<Poke>{
    const pokemon = this.httpClient.get<Poke>(this.apiUrl + id);
    return pokemon;
  }

  getPokemonByUrl(url: string): Observable<Poke>{
    const pokemon = this.httpClient.get<Poke>(url);
    return pokemon;
  }
}
