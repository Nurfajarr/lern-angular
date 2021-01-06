import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../../employees.service'

@Component({
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  data: any

  constructor(private employee: EmployeesService) { }

  ngOnInit() {
    // generate random values for mainChart
    let resp = this.employee.getData();
    resp.subscribe((data) => {
      console.log(data.data);
      this.data = data.data
    });
  }
}
