import { Component, computed, inject, Signal, signal } from '@angular/core';
import { PokemonService } from '../pokemon-service';
import { RouterModule } from '@angular/router';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { forkJoin, switchMap } from 'rxjs';
import { Pokemon } from '../pokemon';


@Component({
  selector: 'app-pokemon-list',
  imports: [RouterModule],
  templateUrl: './pokemon-list.html',
  styleUrl: './pokemon-list.css',
})
export class PokemonList {
  private pokemonService = inject(PokemonService);

  limit = 20;
  max = signal(0)
  offset = signal(0);
  page = signal(1);

  offset$ = toObservable(this.offset);

  pokemons = toSignal(
    this.offset$.pipe(   // 👈 reacciona al offset
      switchMap(offset =>
        this.pokemonService.getAllPokemons(offset, this.limit)
      ),
      switchMap(pokes =>
        forkJoin(
          pokes.map(p =>
            this.pokemonService.getPokemonByUrl(p.url)
          )
        )
      )
    ),
    { initialValue: [] }
  );

  prev(): void{
    if(this.page() > 1){
      this.page.update(value => value - 1);
      this.offset.update(value => value - this.limit);

      console.log(this.page());
      console.log(this.offset());
    }
  }

  next(): void{
      this.page.update(value => value + 1);
      this.offset.update(value => value + this.limit);
      
      console.log(this.page());
      console.log(this.offset());
    
  }
}
