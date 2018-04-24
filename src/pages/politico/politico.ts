import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the PoliticoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-politico',
  templateUrl: 'politico.html',
})
export class PoliticoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alerCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PoliticoPage');
  }

    acceptAllAlert() {
    let alert = this.alerCtrl.create({
      title: 'Confirma?',
      message: 'Você tem certeza de que deseja aceitar todas as doações?',
      buttons: [
        {
          text: 'Sim',
          handler: () => {
            console.log('Sim para todas clicked');
          }
        },
        {
          text: 'Não',
          handler: () => {
            console.log('Não para todas clicked');
          }
        }
        ]
    });
    alert.present()
	}

    refuseAllAlert() {
    let alert = this.alerCtrl.create({
      title: 'Confirma?',
      message: 'Você tem certeza de que deseja recusar todas as doações?',
      buttons: [
       {
          text: 'Sim',
          handler: () => {
            console.log('Sim para todas clicked');
          }
        },
        {
          text: 'Não',
          handler: () => {
            console.log('Não para todas clicked');
          }
        }
        ]
    });
    alert.present()
   }

   newExpenseAlert() {
    let alert = this.alerCtrl.create({
      title: 'Confirma?',
      message: 'Você tem certeza de que deseja solicitar esta despesa?',
      buttons: [
       {
          text: 'Sim',
          handler: () => {
            console.log('Sim para todas clicked');
          }
        },
        {
          text: 'Não',
          handler: () => {
            console.log('Não para todas clicked');
          }
        }
        ]
    });
    alert.present()
   }

}
