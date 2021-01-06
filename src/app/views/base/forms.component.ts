import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../../employees.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  templateUrl: 'forms.component.html'
})
export class FormsComponent implements OnInit {

  saveData = new FormGroup({
    name: new FormControl(''),
    birth_date: new FormControl(''),
    positionCode: new FormControl(''),
    id_number: new FormControl(''),
    gender: new FormControl('')
  })

  data: any
  constructor(private employee: EmployeesService) { }

  isCollapsed: boolean = false;
  iconCollapse: string = 'icon-arrow-up';

  collapsed(event: any): void {
    // console.log(event);
  }

  expanded(event: any): void {
    // console.log(event);
  }

  saveEmployee() {
    this.employee.save(this.saveData.value).subscribe((res) => {
      console.warn("dataaaa", res);
    })
    // console.warn(this.saveData.value);

  }

  toggleCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
    this.iconCollapse = this.isCollapsed ? 'icon-arrow-down' : 'icon-arrow-up';
  }

  ngOnInit() {
    let resp = this.employee.getPosition();
    resp.subscribe((data) => {
      console.log("data Position", data.data);
      this.data = data.data
    });
  }

}
