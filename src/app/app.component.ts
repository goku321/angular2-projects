import { Component } from '@angular/core';

@Component({
  selector: 'demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  delete = false;

  onClicked(value: string): void {
    alert(value);
  }
}
