import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';
  
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formularioLogin: FormGroup;


  constructor(public fb: FormBuilder,
    public alertController: AlertController,
    public navCtrl: NavController) {

    this.formularioLogin = this.fb.group({
      'nombre': new FormControl("",Validators.required),
      'password': new FormControl("",Validators.required)
    });
   }

  ngOnInit() {
  }

  async ingresar() {
    var f = this.formularioLogin.value;
  
    var usuarioString = localStorage.getItem('usuario');
    var usuario = usuarioString ? JSON.parse(usuarioString) : null;
  
    if (usuario && usuario.nombre === f.nombre && usuario.password === f.password) {
      console.log('Ingresado');
      localStorage.setItem('Ingresado','true');
      this.navCtrl.navigateRoot('inicio');
    } else {
      const alert = await this.alertController.create({
        header: '¡Error al iniciar sesión!',
        message: 'Complete los campos o introduzca las credenciales correctas ',
        buttons: ['Aceptar']
      });
  
      await alert.present();
    }
  }
}  
