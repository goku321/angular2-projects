import {Component } from '@angular/core';

@Component({
  selector: 'demo-property-binding',
  template: `
    {{ result }}
  `,
  styles: [],
  inputs: ['result']
})
export class PropertyBindingComponent {
  result: number = 0;
}
