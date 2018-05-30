import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ApiService } from './api.service';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
/**
 * service of Sale page
*/
export class SaleService {

  constructor(
    private apiService: ApiService
  ) { }
  /**
   * @returns current data in database of Sale collection
   */
  getAllSale(): Observable<any> {
    return this.apiService.get(`sale`);
  }
  /**
   * @param data
   * insert data in database of Sale collection
   * @returns current data in database of Sale collection
   */
  addSale(data): Observable<any> {
    return this.apiService.post('sale', data);
  }
  /**
   * @param id
   * @param data
   * update data in database of Sale collection from id
   * @returns current data in database of Sale collection
   */
  updateSale(id: string, data): Observable<any> {
    return this.apiService.put('sale/' + id, data);
  }
  /**
   * @param id
   * delete data in database of Sale collection from id
   * @return current data in database of Sale collection
   */
  deleteSale(id: string): Observable<any> {
    return this.apiService.delete('sale/' + id);
  }
}
