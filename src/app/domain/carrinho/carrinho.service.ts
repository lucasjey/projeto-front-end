import { Carrinho } from "./carrinho";
import { URI_SERVER_API } from '../../app.api';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CarrinhoService {

  private carrinhoList: Carrinho[] = [];
  constructor(private http: Http) { }

  save(carrinho: Carrinho): Observable<any> {

    let headers = new Headers({ 'Content-Type': 'application/json' })
    let options = new RequestOptions({ headers: headers })

    const body = JSON.stringify(carrinho);

    return this.http.post(`${URI_SERVER_API}/carrinho/`, body, options)
      .map(response => response.json().content);
  }

}