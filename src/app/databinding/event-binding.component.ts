import { Component } from '@angular/core';

@Component({
  selector: 'demo-event-binding',
  template: `
    <button (click)="onClick()">Click me!</button>
  `,
  styles: []
})
export class EventBindingComponent {
  onClick(): void {
    alert('It worked');
  }
}
