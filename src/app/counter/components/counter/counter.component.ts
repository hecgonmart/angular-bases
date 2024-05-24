import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  //templateUrl: './counter.component.html',
  template: `


<h3>Counter: {{ counter }}</h3>

<button (click)="incrementaPor(-1)">-1</button>
<button (click)="resetCounter()">Reset</button>
<button (click)="incrementaPor(+1)">+1</button>

  `
})
export class CounterComponent {
  public counter: number = 10;

 incrementaPor(valor: number):void {
  this.counter += valor;
 }

 resetCounter():void {
  this.counter = 10;

  }
}
