import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produtos } from '../model/produtos';


const baseUrl = 'http://localhost:3000/api/produtos';
@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Produtos[]> {
    return this.httpClient.get<Produtos[]>(baseUrl);
  }


  create(Name: string): Observable<any> {
    return this.httpClient.post(baseUrl, {
      Name
    });
  }

  delete(id: any): Observable<any> {
    return this.httpClient.delete(`${baseUrl}/${id}`);
  }
}
