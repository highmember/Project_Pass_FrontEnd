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
  /**
   * @param id
   * delete data in database of Assign collection from id
   * @return current data in database of Assign collection
   */
  deleteAssign(id: string): Observable<any> {
    return this.apiService.delete('assign/' + id);
  }
  getSomeAssign(id: string): Observable<any> {
    return this.apiService.get('assign/' + id);
  }
}
