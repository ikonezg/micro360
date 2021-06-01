import { Component, EventEmitter, Output } from '@angular/core';
import { Pokemon } from '@nx-poc/models';

@Component({
  selector: 'nx-poc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @Output() pokeEmit = new EventEmitter<string>();
  title = 'micro1';
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

  onPoke(event) {
    this.pokeEmit.emit(event);
  }
}
