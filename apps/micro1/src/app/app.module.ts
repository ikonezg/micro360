import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { UiModule } from '@nx-poc/ui';
import { WeatherComponent } from './widgets/weather/weather.component';
import { PokemonComponent } from './widgets/pokemon/pokemon.component';
import { SuperheroComponent } from './widgets/superhero/superhero.component';

@NgModule({
  declarations: [AppComponent, WeatherComponent, PokemonComponent, SuperheroComponent],
  imports: [BrowserModule, UiModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
