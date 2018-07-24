import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ApiService } from './api.service';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
/**
 * service of Store page
*/
export class StoreService {

  constructor(
    private apiService: ApiService
  ) { }
  /**
   * @returns current data in database of Store collection
   */
  getAllStore(): Observable<any> {
    return this.apiService.get(`store`);
  }
  /**
   * @param data
   * insert data in database of Store collection
   * @returns current data in database of Store collection
   */
  addStore(data): Observable<any> {
    return this.apiService.post('store', data);
  }
  /**
   * @param id
   * @param data
   * update data in database of Store collection from id
   * @returns current data in database of Store collection
   */
  updateStore(id: string, data): Observable<any> {
    return this.apiService.put('store/' + id, data);
  }
  /**
   * @param id
   * delete data in database of Store collection from id
   * @return current data in database of Store collection
   */
  deleteStore(id: string): Observable<any> {
    return this.apiService.delete('store/' + id);
  }

  getSomeMat(data): Observable<any> {
    return this.apiService.put('storeId/', data);
  }
}
