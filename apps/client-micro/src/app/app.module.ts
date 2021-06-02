import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { YouTubePlayerModule } from '@angular/youtube-player';
import { JubitoComponent } from './jubito/jubito.component';
@NgModule({
  declarations: [AppComponent, JubitoComponent],
  imports: [BrowserModule, YouTubePlayerModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
