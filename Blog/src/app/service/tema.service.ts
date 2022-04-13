import { HttpClient, HttpHeaders } from '@angular/common/http';
import { typeWithParameters } from '@angular/compiler/src/render3/util';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../Model/Tema';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  constructor(
    private http: HttpClient

  ) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)

  }

  postarTema(tema: Tema): Observable<Tema> {
    return this.http.post<Tema>('https://blogpessoaldiego.herokuapp.com/tema', tema, this.token)
  }

  getAllTema(): Observable<Tema[]> {
    return this.http.get<Tema[]>('https://blogpessoaldiego.herokuapp.com/tema', this.token)
  }

  getByIdTema(id: number): Observable<Tema> {
    return this.http.get<Tema>(`https://blogpessoaldiego.herokuapp.com/tema/${id}`, this.token)


  }

  putTema(tema: Tema): Observable<Tema> {
    return this.http.put<Tema>('https://blogpessoaldiego.herokuapp.com/tema', tema, this.token)

  }

  deleteTema(id: number) {
    return this.http.delete(`https://blogpessoaldiego.herokuapp.com/tema/${id}`, this.token)


  }

}
