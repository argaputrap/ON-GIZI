import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {UpdatelaporanPage} from '../updatelaporan/updatelaporan'

/**
 * Generated class for the DetaillaporanPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-detaillaporan',
  templateUrl: 'detaillaporan.html',
})
export class DetaillaporanPage {
  data:any;
  tanggal : any;
  porsiKarbohidrat: number;
  porsiProteinHewani : number;
  porsiProteinNabati : number;
  porsiLemak : number;
  id : string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.data=this.navParams.data;
  this.id = this.data.$key;
  this.tanggal = this.data.mydate;
  this.porsiKarbohidrat= this.data.porsiKarbohidrat;
  this.porsiProteinHewani= this.data.porsiProteinHewani;
  this.porsiProteinNabati= this.data.porsiProteinNabati;
  this.porsiLemak = this.data.porsiLemak;
    console.log("masuk",this.data);
    console.log("variabel baru",this.tanggal,this.porsiKarbohidrat,this.porsiProteinHewani,this.porsiProteinNabati,this.porsiLemak);
    console.log("key",this.id);
  
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetaillaporanPage');
  }

  update(data)
  {
      this.navCtrl.push(UpdatelaporanPage,data);
  }

}
