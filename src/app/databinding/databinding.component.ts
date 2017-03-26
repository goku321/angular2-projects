import { Component } from '@angular/core';

@Component({
  selector: 'demo-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {

 stringInterpolation: string = "I am interpolated";

 onTest(): boolean {
   return true
 }

}
