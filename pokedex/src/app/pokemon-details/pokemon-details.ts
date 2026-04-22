import { Component, inject } from '@angular/core';
import { Poke } from '../poke';
import { PokemonService } from '../pokemon-service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { switchMap } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-pokemon-details',
  imports: [],
  templateUrl: './pokemon-details.html',
  styleUrl: './pokemon-details.css',
})
export class PokemonDetails {
  route = inject(ActivatedRoute);
  location = inject(Location);
  pokemonService = inject(PokemonService);

  id = toSignal(this.route.paramMap, {initialValue: null});
  pokemon = toSignal(this.route.paramMap.pipe(
    switchMap(params => {
      const id = Number(params.get('id'));
      return this.pokemonService.getPokemonById(id);
    })
    ),
    {initialValue: undefined}
  );

  goBack(): void {
    this.location.back();
  }



}
