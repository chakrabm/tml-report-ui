import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { IModel } from '../report1/model';

@Component({
  selector: 'ngbd-datepicker-popup',
  templateUrl: './datepicker-popup.html',
  styleUrls: ['./datepicker-popup.component.css']
})
export class NgbdDatepickerPopup implements OnInit {
  model: IModel;
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit() {
    let dt = new Date();
    this.model = {"year": dt.getFullYear(),"month": dt.getMonth()+1,"day":dt.getDate()};
  }

  onDateChange() {
    this.notify.emit(this.model.year+'-'+this.model.month+'-'+ this.model.day);
  }
}
