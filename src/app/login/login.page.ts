import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  login: String;
  password: String;

  constructor(
    private router: Router,
    public toastController: ToastController) { }

  ngOnInit() {
  }

  logIn() {
    if (this.login === this.password) {
      this.router.navigate(['/home']);
    } else {
      this.presentToast();
    }
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Authentification failed !',
      duration: 2000
    });
    toast.present();
  }

}
