import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.less' ]
})
export class AppComponent  {
  name = 'Angular';
  sw_memo_false = false;
  sw_memo_true = true;
}
