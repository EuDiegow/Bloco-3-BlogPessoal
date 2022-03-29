import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../Model/Usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private html:HttpClient) {   //permitindo metodos http
}
//verifica endpoints

  Cadastrar(usuario: Usuario):Observable<Usuario> { //referencia model usuario
    return this.html.post<Usuario>('https://blogpessoaldiego.herokuapp.com//usuarios/cadastrar',usuario) 
//usuario // referenciando a model |||  usuario minusculo   referencia a variavel criada 


  }


}