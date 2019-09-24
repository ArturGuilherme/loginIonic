import { AuthService } from './../../services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController } from '@ionic/angular';
import { Usuario } from 'src/app/interfaces/usuario';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public fGroup: FormGroup;

  private loading: any;

  public usuario: Usuario = {};

  constructor(
    private fBuilder: FormBuilder,
    private navCtrl: NavController,
    private authService: AuthService,
    private loadingCtrl: LoadingController) {

    this.fGroup = this.fBuilder.group({
      'email': [null, Validators.compose([
        Validators.required,
        Validators.pattern('[A-Za-z0-9\\._-]+@[A-Za-z]+\\.[A-Za-z]+')
      ])],
      'senha': [null, Validators.compose([
        Validators.required,
        Validators.minLength(5),
      ])]
    });

  }

  ngOnInit() {


  }

  async logar() {

    try {

      this.usuario = this.fGroup.value;
     
      this.authService.login(this.usuario);
      await this.presentLoading();

    } catch (error) {

      console.log(error.code)

    } finally {

      this.loading.dismiss();

    }

  }

  irTelaCadastro() {

    this.navCtrl.navigateForward("cadastro");

  }

  async presentLoading() {

    this.loading = await this.loadingCtrl.create({ message: 'Por favor, aguarde!' });
    return this.loading.present();

  }

}
