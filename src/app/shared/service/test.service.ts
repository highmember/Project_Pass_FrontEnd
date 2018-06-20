import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ApiService } from './api.service';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
/**
 * service of Test page
*/
export class TestService {

  constructor(
    private apiService: ApiService
  ) { }
  /**
   * @returns current data in database of Test collection
   */
  getAllTest(): Observable<any> {
    return this.apiService.get(`test`);
  }
  /**
   * @param data
   * insert data in database of Test collection
   * @returns current data in database of Test collection
   */
  addTest(data): Observable<any> {
    return this.apiService.post('test', data);
  }
  /**
   * @param id
   * @param data
   * update data in database of Test collection from id
   * @returns current data in database of Test collection
   */
  updateTest(id: string, data): Observable<any> {
    return this.apiService.put('test/' + id, data);
  }
  /**
   * @param id
   * delete data in database of Test collection from id
   * @return current data in database of Test collection
   */
  deleteTest(id: string): Observable<any> {
    return this.apiService.delete('test/' + id);
  }
}
