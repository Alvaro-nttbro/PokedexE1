import { Component, inject } from '@angular/core';
import { PokemonService } from '../pokemon-service';
import { Pokemon } from '../pokemon';
import { Poke } from '../poke';
import { map, pipe } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-pokemon-list',
  imports: [RouterModule],
  templateUrl: './pokemon-list.html',
  styleUrl: './pokemon-list.css',
})
export class PokemonList {
  listHeight: number = 20;
  limit: number = 50;
  offset: number = 0;
  page: number = 1;
  pokemons: Pokemon[] = [];
  pokes: Poke[] = [];
  pokemonService = inject(PokemonService);
  
  ngOnInit(){
    this.pokemonService.getAllPokemons(this.offset, this.limit).subscribe((data) => {
      this.pokemons = data;

      this.pokemons.forEach((p, index) => {
        this.pokemonService.getPokemonByUrl(p.url).subscribe(poke => {
          this.pokes[index] = poke;
        });
      });
    });
    console.log(this.pokemons);
    console.log(this.pokes);
  }

  prev(): void{
    if(this.page > 1){
      this.page--;
      this.offset -= this.listHeight
      this.limit -= this.listHeight;
    }
  }

  next(): void{
    if(this.page > 1){
      this.page--;
      this.offset -= this.listHeight
      this.limit -= this.listHeight;
    }
  }
}
