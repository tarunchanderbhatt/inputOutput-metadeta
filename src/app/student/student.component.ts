import { Component, OnInit, ViewEncapsulation, Input,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
  encapsulation:ViewEncapsulation.Native,
  outputs:['childevent']
  //inputs:['pdata']
})
export class StudentComponent implements OnInit {
  //pdata:any;
childevent=new EventEmitter()
  constructor() { }

  ngOnInit() {
  }

  onchange(value)
  {
    this.childevent.emit(value);
  }
}
