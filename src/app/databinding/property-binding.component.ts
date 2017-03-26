import {Component, Input} from '@angular/core';

@Component({
  selector: 'demo-property-binding',
  template: `
    {{ result }}
  `,
  styles: []
})
export class PropertyBindingComponent {
  @Input() result: number = 0;
}
