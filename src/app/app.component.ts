import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { ProfilePage } from '../pages/profile/profile';
import { MarketPage } from '../pages/market/market';
import { firebaseConfig } from '../../config/config';
import firebase from 'firebase';

@Component({
  templateUrl: '../app/app.html'
})
export class MyApp {
  @ViewChild('content') navCtrl;
  rootPage = ProfilePage;

  constructor(platform: Platform, public menuCtrl: MenuController) {
    
    firebase.initializeApp(firebaseConfig);

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openMarket(){
    setTimeout(()=>{
      this.menuCtrl.close();
      this.navCtrl.setRoot(MarketPage);
    }, 100);
  }

  openProfile(){
    setTimeout(()=>{
      this.menuCtrl.close();
      this.navCtrl.setRoot(ProfilePage);
    }, 100);
  }
}
