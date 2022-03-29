import { Component, OnInit } from '@angular/core';
import { Usuario } from '../Model/Usuario';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {
  // criando uma variavel para receber referencia a model usuario
  usuario: Usuario= new Usuario
  confirmarSenha: string 

  constructor(
    private authService: AuthService
   
  ){}

  ngOnInit(): void {
  }

  confirmeSenha(event:any){ // criando evento para pegar as senhas
    this.confirmarSenha = event.target.value 
  }

  cadastrarUsuario(){
    if(this.usuario.senha != this.confirmarSenha){
      alert ("Senha incorreta")
    }
    else{
      this.authService.Cadastrar(this.usuario).subscribe((resp:Usuario)=>{
        this.usuario=resp 
        alert("Cadastrado com sucesso!")
      });
    

      

    }  

    }

  }


