import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbdDatepickerPopup } from './datepicker-popup.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    NgbdDatepickerPopup
  ],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    NgbdDatepickerPopup
  ]
})
export class SharedModule { }
