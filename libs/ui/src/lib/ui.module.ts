import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GreenButtonComponent } from './green-button/green-button.component';
import { RedButtonComponent } from './red-button/red-button.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    GreenButtonComponent,
    RedButtonComponent
  ],
  exports: [
    GreenButtonComponent,
    RedButtonComponent
  ],
})
export class UiModule {}
