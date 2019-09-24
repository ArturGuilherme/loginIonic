import { AuthService } from './../../services/auth.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interfaces/usuario';
import { LoadingController, ToastController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  public usuario: Usuario = {};

  public fGroup: FormGroup;

  private loading: any;

  constructor(
    private fBuilder: FormBuilder,
    private loadingController: LoadingController,
    private toastCtrl: ToastController,
    private authService: AuthService,
    private navCtrl:NavController
    ) {

    this.fGroup = this.fBuilder.group({
      'nomeCompleto':[null],
      'email':[null],
      'dataNasc':[null],
      'senha':[null],
      'contraSenha':[null]
    });

   }

  ngOnInit() {

  }

  async cadastrar(){

    await this.presentLoading();
    this.usuario = this.fGroup.value;

    try {

      await this.authService.cadastro(this.usuario);
      await this.presentToast('Usuário cadastrado com sucesso!');
      this.usuario.id = this.authService.getAuth().currentUser.uid;

     
    } catch (error) {
    
      console.error(error);
      await this.presentToast(error.code);  
   
    }finally{
   
      this.loading.dismiss();
   
    }

  }

  async presentLoading() {
    
    this.loading = await this.loadingController.create({message: 'Por favor, aguarde!'});
    return this.loading.present();
  
  }


  async presentToast(message) {
  
    const toast = await this.toastCtrl.create({
      message,
      duration: 2000
    });
    toast.present();
  
  }


}
