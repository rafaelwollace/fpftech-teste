import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vendas } from '../model/vendas';


const baseUrl = 'https://fpf-backend.herokuapp.com/api/vendas';
@Injectable({
  providedIn: 'root'
})
export class VendasServices {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Vendas[]> {
    return this.httpClient.get<Vendas[]>(baseUrl);
  }

  find(id:number): Observable<any> {
      return this.httpClient.get(`${baseUrl}/${id}`)
  }

  create(fk_clientes: number, fk_produtos: number, 	quantidade: number, dataVenda: Date): Observable<any> {
    return this.httpClient.post(baseUrl, {
      fk_clientes, fk_produtos, quantidade, dataVenda
    });
  }


  update(id: number, fk_clientes: number, fk_produtos: number, 	quantidade: number, dataVenda: Date): Observable<any> {
    return this.httpClient.put(`${baseUrl}/${id}`, {
      fk_clientes, fk_produtos, quantidade, dataVenda
    });
  }

  delete(id: any): Observable<any> {
    return this.httpClient.delete(`${baseUrl}/${id}`);
  }
}
