import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the DoadorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-doador',
  templateUrl: 'doador.html',
})
export class DoadorPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alerCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DoadorPage');
  }

  donationAlert() {
    let alert = this.alerCtrl.create({
      title: 'Confirma?',
      message: 'Você tem certeza de que deseja realizar esta doação?',
      buttons: [
        {
          text: 'Sim',
          handler: () => {
            console.log('Sim clicked');
          }
        },
        {
          text: 'Não',
          handler: () => {
            console.log('Não clicked');
          }
        }
      ]
    });
    alert.present()
  }

}
