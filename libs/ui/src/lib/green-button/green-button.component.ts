import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'nx-poc-green-button',
  templateUrl: './green-button.component.html',
  styleUrls: ['./green-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GreenButtonComponent {
  @Input() label: string;
  @Output() emitBtn = new EventEmitter<string>();

  onClick() {
    this.emitBtn.emit(this.label);
  }
}
