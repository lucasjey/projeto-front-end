import { Category } from "./category";
import { URI_SERVER_API } from '../../app.api';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CategoryService {

  private categoryList: Category[] = [];
  constructor(private http: Http) { }

  save(category: Category): Observable<any> {

    let headers = new Headers({ 'Content-Type': 'application/json' })
    let options = new RequestOptions({ headers: headers })

    const body = JSON.stringify(category);
    
    if(category.id){
      return this.http
          .put(`${URI_SERVER_API}/category/`, body, options)
          .map(res => res.json().content);
  } else {

    return this.http.post(`${URI_SERVER_API}/category/`, body, options)
      .map(response => response.json().content);
      
  }



  }

  update(category: Category) {
    let headers = new Headers({ 'Content-Type': 'application/json' })
    let options = new RequestOptions({ headers: headers })

    const body = JSON.stringify(category);

    return this.http.put(`${URI_SERVER_API}/category/${category.id}`, body, options)
      .map(response => response.json());
  }

  findOne(id: number) {
    return this.http
    .get(`${URI_SERVER_API}/category/${id}`)
    .map(response => response.json().content);
  }

  findAll() {
    return this.http
      .get(`${URI_SERVER_API}/category`).map(response => response.json());
  }

  delete(id: number): Observable<boolean> {
    return this.http
      .delete(`${URI_SERVER_API}/category/${id}`)
      .map(response => response.json().content);
  }
}