import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ApiService } from './api.service';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
/**
 * service of Project page
*/
export class ProjectService {

  constructor(
    private apiService: ApiService
  ) { }
  /**
   * @returns current data in database of Project collection
   */
  getAllProject(): Observable<any> {
    return this.apiService.get(`project`);
  }
  /**
   * @param data
   * insert data in database of Project collection
   * @returns current data in database of Project collection
   */
  addProject(data): Observable<any> {
    return this.apiService.post('project', data);
  }
  /**
   * @param id
   * @param data
   * update data in database of Project collection from id
   * @returns current data in database of Project collection
   */
  updateProject(id: string, data): Observable<any> {
    return this.apiService.put('project/' + id, data);
  }
  /**
   * @param id
   * delete data in database of Project collection from id
   * @return current data in database of Project collection
   */
  deleteProject(id: string): Observable<any> {
    return this.apiService.delete('project/' + id);
  }
}
