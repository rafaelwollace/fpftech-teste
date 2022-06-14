import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produtos } from '../model/produtos';


const baseUrl = 'https://fpf-backend.herokuapp.com/api/produtos';
@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Produtos[]> {
    return this.httpClient.get<Produtos[]>(baseUrl);
  }

  find(id:number): Observable<any> {
    return this.httpClient.get(`${baseUrl}/${id}`)
  }

  create(nomeProd: string, preco: number, valorPromocao: number, descricao: string): Observable<any> {
    return this.httpClient.post(baseUrl, {
       nomeProd, preco, valorPromocao, descricao
    });
  }

  update(id: number, nomeProd: string, preco: number, valorPromocao: number, descricao: string): Observable<any> {
    return this.httpClient.put(`${baseUrl}/${id}`, {
      nomeProd, preco, valorPromocao, descricao
    });
  }

  delete(id: any): Observable<any> {
    return this.httpClient.delete(`${baseUrl}/${id}`);
  }
}
