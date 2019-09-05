import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Liste',
      url: '/list',
      icon: 'list'
    },
    {
      title: 'Liste Produit',
      url: '/liste-produit',
      icon: 'build'
    },
    {
      title: 'Camera',
      url: '/camera',
      icon: 'camera'
    },
    {
      title: 'Geolocalisation',
      url: '/geolocalisation',
      icon: 'map'
    },
    {
      title: 'Log out',
      url: '/login',
      icon: 'exit'
    },
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  createTable() {
    firebase.database().ref('/produit').set(this.appPages);
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      // Your web app's Firebase configuration
      var firebaseConfig = {
        apiKey: "AIzaSyBXe5ysgDsIVORy_T60xiMl02URa1EbMIs",
        authDomain: "annonce-nc.firebaseapp.com",
        databaseURL: "https://annonce-nc.firebaseio.com",
        projectId: "annonce-nc",
        storageBucket: "",
        messagingSenderId: "371104901968",
        appId: "1:371104901968:web:3bc4284afc20e1e670da55"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
    });
  }
}
