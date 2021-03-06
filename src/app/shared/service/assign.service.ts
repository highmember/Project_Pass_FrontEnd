import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ApiService } from './api.service';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
/**1
 * service of Store page
*/
export class AssignService {

  constructor(
    private apiService: ApiService
  ) { }
  /**
   * @returns current data in database of Assign collection
   */
  getAllAssign(): Observable<any> {
    return this.apiService.get(`assign`);
  }
  getId(id: String): Observable<any> {
    return this.apiService.get(`assign/` + id);
  }
  /**
   * @param data
   * insert data in database of Assign collection
   * @returns current data in database of Assign collection
   */
  addAssign(data): Observable<any> {
    return this.apiService.post('assign', data);
  }
  /**
   * @param id
   * @param data
   * update data in database of Assign collection from id
   * @returns current data in database of Assign collection
   */
  updateAssign(id: string, data): Observable<any> {
    return this.apiService.put('assign/' + id, data);
  }

  updateAssignReturnMat(id: string, data): Observable<any> {
    return this.apiService.put('assignReturn/' + id, data);
  }

  updateMatStore(id: string, data): Observable<any> {
    return this.apiService.put('assignn/' + id, data);
  }
  updateMatUse(id: string, data): Observable<any> {
    return this.apiService.put('assignMatUse/' + id, data);
  }
  /**
   * @param id
   * delete data in database of Assign collection from id
   * @return current data in database of Assign collection
   */
  deleteAssign(id: string): Observable<any> {
    return this.apiService.delete('assign/' + id);
  }
  getSomeAssign(id): Observable<any> {
    return this.apiService.get('assignId/' + id);
  }
  getProjectProgress(id): Observable<any> {
    return this.apiService.get('assignnId/' + id);
  }
  getAssignByEmp(id): Observable<any> {
    return this.apiService.get('assignEmpName/' + id);
  }
  updateMatStoreForm(id: string, data): Observable<any> {
    return this.apiService.put('assignForm/' + id, data);
  }

}
