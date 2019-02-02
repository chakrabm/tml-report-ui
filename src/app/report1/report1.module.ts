import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { Report1CriteriaComponent } from './report1-criteria.component';
import { Report1ResultComponent } from './report1-result.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [Report1CriteriaComponent, Report1ResultComponent],
  imports: [
    RouterModule.forChild([
      { path: 'report1', component: Report1CriteriaComponent },
      { path: 'report1/:noOfDays', component: Report1ResultComponent}
    ]),
    SharedModule,
    NgxPaginationModule 
  ]
})
export class Report1Module { }
