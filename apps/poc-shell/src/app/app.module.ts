import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { UiModule } from '@nx-poc/ui';
import { PluginProxyComponent } from './services/plugins/plugin-proxy.component';
@NgModule({
  declarations: [AppComponent, PluginProxyComponent],
  imports: [BrowserModule, UiModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
