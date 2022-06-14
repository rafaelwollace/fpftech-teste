import { Clientes } from './../model/clientes';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const baseUrl = 'https://fpf-backend.herokuapp.com/api/clientes';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Clientes[]> {
    return this.httpClient.get<Clientes[]>(baseUrl);
  }

  find(id:number): Observable<any> {
      return this.httpClient.get(`${baseUrl}/${id}`)
  }

  create(nome: string, rg: number, dataNascimento: Date, email: string): Observable<any> {
    return this.httpClient.post(baseUrl, {
      nome, rg, dataNascimento, email
    });
  }


  update(id: number, nome: string, rg: number, dataNascimento: Date, email: string): Observable<any> {
    return this.httpClient.put(`${baseUrl}/${id}`, {
      nome, rg, dataNascimento, email
    });
  }

  delete(id: any): Observable<any> {
    return this.httpClient.delete(`${baseUrl}/${id}`);
  }
}
