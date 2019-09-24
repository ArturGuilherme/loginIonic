import { Usuario } from './../interfaces/usuario';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private usuarioCollection: AngularFirestoreCollection<Usuario>; 

  constructor(private afs: AngularFirestore) { 
    this.usuarioCollection = this.afs.collection<Usuario>('Usuario');
  }

  addUsuario(usuario:Usuario){


  }

}
