import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ApiService } from './api.service';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
/**
 * service of User page
*/
export class UserService {

  constructor(
    private apiService: ApiService
  ) { }
  /**
   * @returns current data in database of User collection
   */
  getAllUser(): Observable<any> {
    return this.apiService.get(`user`);
  }
  /**
   * @param data
   * insert data in database of User collection
   * @returns current data in database of User collection
   */
  addUser(data): Observable<any> {
    return this.apiService.post('user', data);
  }
  /**
   * @param id
   * @param data
   * update data in database of User collection from id
   * @returns current data in database of User collection
   */
  updateUser(id: string, data): Observable<any> {
    return this.apiService.put('user/' + id, data);
  }
  /**
   * @param id
   * delete data in database of User collection from id
   * @return current data in database of User collection
   */
  deleteUser(id: string): Observable<any> {
    return this.apiService.delete('user/' + id);
  }
  checkUser(data): Observable<any> {
    return this.apiService.put('checkUser', data);
  }
}
