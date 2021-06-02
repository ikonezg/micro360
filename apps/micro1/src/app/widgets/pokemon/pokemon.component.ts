import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../../../../../libs/models/src';

@Component({
  selector: 'nx-poc-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css'],
})
export class PokemonComponent implements OnInit {
  pokemon: Pokemon[] = [
    {
      id: 1,
      name: 'bulbasaur',
      type: 'water',
      level: 5,
    },
    {
      id: 1,
      name: 'pikachu',
      type: 'fire',
      level: 6,
    },
    {
      id: 1,
      name: 'psyduck',
      type: 'mind',
      level: 12,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
