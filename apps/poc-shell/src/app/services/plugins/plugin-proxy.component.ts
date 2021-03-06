import {
  Component,
  Input,
  OnChanges,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  Injector,
  Type,
} from '@angular/core';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { PluginOptions } from './plugin';

@Component({
  selector: 'nx-poc-plugin-proxy',
  template: ` <ng-container #placeHolder></ng-container> `,
})
export class PluginProxyComponent implements OnChanges {
  @ViewChild('placeHolder', { read: ViewContainerRef, static: true })
  viewContainer: ViewContainerRef;

  constructor(
    private injector: Injector,
    private cfr: ComponentFactoryResolver
  ) {}

  @Input() options: PluginOptions;

  async ngOnChanges() {
    this.viewContainer.clear();

    const Component = await loadRemoteModule(this.options).then(
      (m) => m[this.options.componentName]
    );

    // Ivy --> ViewEngine
    const factory = this.cfr.resolveComponentFactory(Component);

    const compRef: any = this.viewContainer.createComponent(
      factory,
      null,
      this.injector
    );

    compRef.instance.pokeEmit.subscribe((e) => console.log(e));

    // const compInstance = compRef.instance;
    // compInstance.a = 'xx'
    // compInstance.onChange.subscribe(...)
    // compInstance.m();
  }
}
