import { Component, OnInit } from '@angular/core';
import { LookupService } from './services/plugins/lookup.service';
import { PluginOptions } from './services/plugins/plugin';

@Component({
  selector: 'nx-poc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'poc-shell';

  constructor(private lookupService: LookupService) {}
  plugins: PluginOptions[] = [];
  onClick(msg: string) {
    console.log(msg);
  }

  async ngOnInit(): Promise<void> {
    this.plugins = await this.lookupService.lookup();
  }
}
