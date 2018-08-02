import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ApiService } from './api.service';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
/**
 * service of Employee page
*/
export class EmployeeService {

  constructor(
    private apiService: ApiService
  ) { }
  /**
   * @returns current data in database of Employee collection
   */
  getAllEmployee(): Observable<any> {
    return this.apiService.get(`employee`);
  }
  getSomeEmployeeByPart(id: string): Observable<any> {
    return this.apiService.get('employeePart/' + id);
  }
  /**
   * @param data
   * insert data in database of Employee collection
   * @returns current data in database of Employee collection
   */
  addEmployee(data): Observable<any> {
    return this.apiService.post('employee', data);
  }
  /**
   * @param id
   * @param data
   * update data in database of Employee collection from id
   * @returns current data in database of Employee collection
   */
  updateEmployee(id: string, data): Observable<any> {
    return this.apiService.put('employee/' + id, data);
  }
  /**
   * @param id
   * delete data in database of Employee collection from id
   * @return current data in database of Employee collection
   */
  deleteEmployee(id: string): Observable<any> {
    return this.apiService.delete('employee/' + id);
  }
}
