import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'demo-event-binding',
  template: `
    <button (click)="onClicked()">Click me!</button>
  `,
  styles: []
})
export class EventBindingComponent {
  @Output() clicked =  new EventEmitter<string>();

  onClicked(): void {
    this.clicked.emit('it works!');
  }
}
