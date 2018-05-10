import { Produto } from "./produto";
import { URI_SERVER_API } from '../../app.api';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProdutoService {

  private produtoList: Produto[] = [];
  constructor(private http: Http) { }

  save(produto: Produto): Observable<any> {

    let headers = new Headers({ 'Content-Type': 'application/json' })
    let options = new RequestOptions({ headers: headers })

    const body = JSON.stringify(produto);
      
      if(produto.id){
        return this.http
            .put(`${URI_SERVER_API}/produto/`, body, options)
            .map(res => res.json().content);
    } else {

      return this.http.post(`${URI_SERVER_API}/produto/`, body, options)
        .map(response => response.json().content);
        
    }
  }

  update(produto: Produto) {
    let headers = new Headers({ 'Content-Type': 'application/json' })
    let options = new RequestOptions({ headers: headers })

    const body = JSON.stringify(produto);

    return this.http.put(`${URI_SERVER_API}/produto/${produto.id}`, body, options)
      .map(response => response.json());
  }

  findOne(id: number) {
    return this.http
    .get(`${URI_SERVER_API}/produto/${id}`)
    .map(response => response.json().content);
  }

  findAll() {
    return this.http
      .get(`${URI_SERVER_API}/produto`).map(response => response.json().content);

  }

  delete(id: number): Observable<boolean> {
    return this.http
      .delete(`${URI_SERVER_API}/produto/${id}`)
      .map(response => response.json().content);
  }

}