import { Component } from '@angular/core';

@Component({
  selector: 'demo-two-way-binding',
  template: `
    <input type="text" [(ngModel)]="person.name">
    <h1>{{ person.name }}</h1>
  `,
  styles: []
})
export class TwoWayBindingComponent {
  person = {
    name: 'dee',
    age: 23
  }
}
