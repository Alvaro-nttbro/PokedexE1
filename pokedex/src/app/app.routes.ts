import { Routes } from '@angular/router';
import { PokemonList } from './pokemon-list/pokemon-list';
import { PokemonDetails } from './pokemon-details/pokemon-details';

export const routes: Routes = [
    {path: '', component: PokemonList, title:'Home Page'},
    {path: 'details/:id', component: PokemonDetails, title:'Pokemon details'}
];
