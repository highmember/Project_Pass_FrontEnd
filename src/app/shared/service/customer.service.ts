import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ApiService } from './api.service';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
/**
 * service of Customer page
*/
export class CustomerService {

  constructor(
    private apiService: ApiService
  ) { }
  /**
   * @returns current data in database of Customer collection
   */
  getAllCustomer(): Observable<any> {
    return this.apiService.get(`customer`);
  }
  /**
   * @param data
   * insert data in database of Customer collection
   * @returns current data in database of Customer collection
   */
  addCustomer(data): Observable<any> {
    return this.apiService.post('customer', data);
  }
  /**
   * @param id
   * @param data
   * update data in database of Customer collection from id
   * @returns current data in database of Customer collection
   */
  updateCustomer(id: string, data): Observable<any> {
    return this.apiService.put('customer/' + id, data);
  }
  /**
   * @param id
   * delete data in database of Customer collection from id
   * @return current data in database of Customer collection
   */
  deleteCustomer(id: string): Observable<any> {
    return this.apiService.delete('customer/' + id);
  }
}
