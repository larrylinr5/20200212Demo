import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message = 'TEST';
  account = 'bbb';
  account2 = '按鈕按下觸發的事件';
  clickHandler() {
    alert(this.account2);
  }
  account3 = 'ccc';
  clickHandler2() {
    alert(this.account3);
  }
}
