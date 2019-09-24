import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Usuario } from '../interfaces/usuario';
import { ThrowStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth) {}

  login(usuario:Usuario){
    return this.afAuth.auth.signInWithEmailAndPassword(usuario.email,usuario.senha);
  }

  cadastro(usuario:Usuario){
    return this.afAuth.auth.createUserWithEmailAndPassword(usuario.email,usuario.senha);
  }

  deslogar(){
    return this.afAuth.auth.signOut();
  }

  getAuth(){
    return this.afAuth.auth;
  }

}
