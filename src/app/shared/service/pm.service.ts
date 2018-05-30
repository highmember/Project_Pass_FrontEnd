import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ApiService } from './api.service';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
/**
 * service of Pm page
*/
export class PmService {

  constructor(
    private apiService: ApiService
  ) { }
  /**
   * @returns current data in database of Pm collection
   */
  getAllPm(): Observable<any> {
    return this.apiService.get(`pm`);
  }
  /**
   * @param data
   * insert data in database of Pm collection
   * @returns current data in database of Pm collection
   */
  addPm(data): Observable<any> {
    return this.apiService.post('pm', data);
  }
  /**
   * @param id
   * @param data
   * update data in database of Pm collection from id
   * @returns current data in database of Pm collection
   */
  updatePm(id: string, data): Observable<any> {
    return this.apiService.put('pm/' + id, data);
  }
  /**
   * @param id
   * delete data in database of Pm collection from id
   * @return current data in database of Pm collection
   */
  deletePm(id: string): Observable<any> {
    return this.apiService.delete('pm/' + id);
  }
}
