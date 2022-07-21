import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tutorial } from '../_models/tutorial.model';


@Injectable({
  providedIn: 'root'
})
export class TutorialesService {

  private baseUrl = 'http://ec2-3-82-244-54.compute-1.amazonaws.com:9090/api/tutorials/';

  constructor(private http: HttpClient) { }
 
  // public getAllTutoriales():Observable<any>{
  //   return this.http.get(this.API_URL);
  // }     

  getAll(): Observable<Tutorial[]> {
    return this.http.get<Tutorial[]>(this.baseUrl);
  }

  get(id: any): Observable<Tutorial> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(this.baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(this.baseUrl);
  }

  findByTitle(title: any): Observable<Tutorial[]> {
    return this.http.get<Tutorial[]>(`${this.baseUrl}?title=${title}`);
  }


}

