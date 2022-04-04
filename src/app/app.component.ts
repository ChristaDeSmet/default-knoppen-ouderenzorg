import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.less' ]
})

export class AppComponent implements OnInit {
  name = 'Angular';
  sw_memo_false : boolean;
  sw_memo_true : boolean ;
  sw_memo : boolean;


  ngOnInit() {
    this.sw_memo_false = false;
    this.sw_memo_true = true;
    this.sw_memo = false;
}

getBoolClass(){
  return '';
}
}
