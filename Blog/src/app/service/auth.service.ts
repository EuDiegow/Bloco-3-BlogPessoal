
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { User } from '../Model/User';
import { environment } from 'src/environments/environment.prod';
import { UserLogin } from '../model/UserLogin';




@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
     private http:HttpClient
     ) {}   //permitindo metodos http

//verifica endpoints

  entrar(userLogin:UserLogin): Observable<UserLogin>{ //referencia model usuario
    return this.http.post<UserLogin>('http://localhost:8080/usuarios/logar',userLogin) 
//usuario // referenciando a model |||  usuario minusculo   referencia a variavel criada 
  }
  cadastrar(user: User):Observable<User>{
    return this.http.post<User>('http://localhost:8080/usuarios/cadastrar', user)
  }

  getByIdUser(id: number): Observable<User>{
    return this.http.get<User>(`http://localhost:8080/usuarios/${id}`)
}

  logado(){
    let ok : Boolean = false
    
    if(environment.token != ''){
      ok = true
    }    
    return ok

  }

  atualizar(user: User):Observable<User>{
    return this.http.put<User>('http://localhost:8080/usuarios/atualizar', user)
  }

}