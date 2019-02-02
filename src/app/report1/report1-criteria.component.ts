import { Component, OnInit } from '@angular/core';
import { Report1Service } from './report1.service'
import { IBike } from './report1';
import { Observable } from 'rxjs';
import { DatePipe } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'tml-report1-criteria',
  templateUrl: './report1-criteria.component.html',
  styleUrls: ['./report1-criteria.component.css']
})
export class Report1CriteriaComponent implements OnInit {

  pageTitle: string = 'Report 1';
  dateCriteria: string;
  results: IBike[];
  errorMessage = '';
  p: number = 1;

  constructor(private service: Report1Service, private datepipe: DatePipe) { }

  ngOnInit() {
    let dt = new Date();
    this.dateCriteria = dt.getFullYear() + '-' + (dt.getMonth()+1) + '-' + dt.getDate();
  }

  onSearchClick(): void {
    //this.results = this.service.getBikeByPurchaseDateGreaterThan(this.date);
    this.service.getBikeByPurchaseDateGreaterThan(this.dateCriteria).subscribe(
      results => {
        this.results = results;
      },
      error => this.errorMessage = <any>error
    );
  }

  onNotify(message: string): void {
    this.dateCriteria = message;
  }

}
