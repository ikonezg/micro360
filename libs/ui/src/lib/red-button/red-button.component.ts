import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'nx-poc-red-button',
  templateUrl: './red-button.component.html',
  styleUrls: ['./red-button.component.scss'],
})
export class RedButtonComponent {
  @Output() btnEmit = new EventEmitter<string>();
  @Input() label: string;
  onClick(label: string) {
    this.btnEmit.emit(label);
  }
}
