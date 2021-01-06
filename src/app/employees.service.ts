import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private http: HttpClient) { }

  public getData() {
    let url = "http://localhost:8012/master/employee/getList";
    return this.http.get(url);
  }

  public getPosition() {
    let url = "http://localhost:8012/master/employee/getPosition";
    return this.http.get(url);
  }

  save(data) {
    let url = "http://localhost:8012/master/employee/save"
    return this.http.post(url, data)
    // console.warn("service", data);

  }
}
