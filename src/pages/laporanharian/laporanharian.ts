import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase} from 'angularfire2/database';

/**
 * Generated class for the LaporanharianPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-laporanharian',
  templateUrl: 'laporanharian.html',
})
export class LaporanharianPage {

  
  myDate: String = new Date().toISOString();
  id : string;

  constructor(private alertctrl :AlertController ,private db : AngularFireDatabase,public fire :AngularFireAuth,public navCtrl: NavController, public navParams: NavParams) {
  }

  @ViewChild('mydate') mydate;
  @ViewChild('porsiKarbohidrat') porsiKarbohidrat;
  @ViewChild('porsiProteinHewani') porsiProteinHewani;
  @ViewChild('porsiProteinNabati') porsiProteinNabati;
  @ViewChild('porsiLemak') porsiLemak;

  ionViewDidLoad() {
    console.log('ionViewDidLoad LaporanharianPage');
  }
  alert(message : string)
  {
    this.alertctrl.create({
      title: 'info !',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }

  submitLaporan()
  {
    
    this.id = this.fire.auth.currentUser.uid;
    this.db.list('/laporan/'+this.id).push({
      mydate : this.mydate.value,
      porsiKarbohidrat : this.porsiKarbohidrat.value,
      porsiProteinHewani : this.porsiProteinHewani.value,
      porsiProteinNabati : this.porsiProteinNabati.value,
      porsiLemak : this.porsiLemak.value,
    })

    this.alert("Sukses")
    }

    

}
