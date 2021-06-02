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
}
