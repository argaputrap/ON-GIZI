import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase} from 'angularfire2/database';
import {LihatlaporanPage} from '../lihatlaporan/lihatlaporan'

/**
 * Generated class for the UpdatelaporanPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */


@Component({
  selector: 'page-updatelaporan',
  templateUrl: 'updatelaporan.html',
})
export class UpdatelaporanPage {
  id : string;
  uid : string;
  data : any;
  mydate : any;
  @ViewChild('porsiKarbohidrat') porsiKarbohidrat;
  @ViewChild('porsiProteinHewani') porsiProteinHewani;
  @ViewChild('porsiProteinNabati') porsiProteinNabati;
  @ViewChild('porsiLemak') porsiLemak;
  constructor(private alertctrl :AlertController ,private db : AngularFireDatabase,public fire :AngularFireAuth,public navCtrl: NavController, public navParams: NavParams) {
  this.data=this.navParams.data;
  this.uid = this.data.$key;
  this.mydate = this.data.mydate; 
  this.porsiKarbohidrat= this.data.porsiKarbohidrat;
  this.porsiProteinHewani= this.data.porsiProteinHewani;
  this.porsiProteinNabati= this.data.porsiProteinNabati;
  this.porsiLemak = this.data.porsiLemak;
  }

  alert(message : string)
  {
    this.alertctrl.create({
      title: 'info !',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad UpdatelaporanPage');
  }

  updateLaporan()
  {
    this.id =this.fire.auth.currentUser.uid;    
    this.db.object('/laporan/'+ this.id+'/'+this.uid).update({

      porsiKarbohidrat : this.porsiKarbohidrat.value,
      porsiProteinHewani : this.porsiProteinHewani.value,
      porsiProteinNabati : this.porsiProteinNabati.value,
      porsiLemak : this.porsiLemak.value,
      
     })
     
     this.alert("Sukses")
  }

}
