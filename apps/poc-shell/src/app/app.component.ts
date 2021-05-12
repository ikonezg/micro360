import { Component } from '@angular/core';

@Component({
  selector: 'nx-poc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'poc-shell';

  onClick(msg: string) {
    console.log(msg);
  }
}
