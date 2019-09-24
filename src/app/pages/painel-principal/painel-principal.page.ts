import { async } from '@angular/core/testing';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-painel-principal',
  templateUrl: './painel-principal.page.html',
  styleUrls: ['./painel-principal.page.scss'],
})
export class PainelPrincipalPage implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit() {
  }

  async deslogar(){
    try{

      await this.authService.deslogar();
    
    }catch(error){
    
      console.log(error);
    
    }
    
  }



}
