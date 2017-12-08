import { Component,ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase} from 'angularfire2/database';
import { HalamanmakananPage} from '../halamanmakanan/halamanmakanan'
import { LaporanharianPage } from '../laporanharian/laporanharian'
import {LihatlaporanPage } from '../lihatlaporan/lihatlaporan'
/**
 * Generated class for the RekomendasiPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-rekomendasi',
  templateUrl: 'rekomendasi.html',
})
export class RekomendasiPage {
  gizi : any;
  karbohidrat : number;
  protein_hewani : number;
  protein_nabati : number;
  lemak : number;
  jenis : string;
  value : string;
  id : string;
  hehe : any = [];
  info : string;
  mydate: String = new Date().toISOString();
  
  constructor(private db : AngularFireDatabase,private fire :AngularFireAuth,public navCtrl: NavController, public navParams: NavParams) {
    this.gizi= {};
    this.gizi = this.navParams.data;
    this.karbohidrat=this.gizi.karbohidrat;
    this.protein_hewani=this.gizi.protein_hewani;
    this.protein_nabati=this.gizi.protein_nabati;
    this.lemak=this.gizi.lemak;
    console.log(this.karbohidrat,this.protein_hewani,this.protein_nabati,this.lemak,this.jenis);
    /*
    this.id =this.fire.auth.currentUser.uid;
    this.db.list('/laporan/'+this.id ).subscribe(data => {
      
      console.log("liat",this.mydate,data[i].mydate.day);
      
      for(var i=0,j=data.length; j > -1; j--) {
        console.log("liat",this.mydate,data[i].mydate.day);
        if(this.mydate == data[i].mydate.day)
        {
          this.hehe[j-1] = data[i];
          i++;
        }
        else 
         this.info = "Anda belum buat laporan harian "
}
    console.log(this.hehe,data)
    })
    */

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RekomendasiPage');
  }

  cekHalamanMakanan(value)
  {
    console.log(value);
    
    
    this.navCtrl.push(HalamanmakananPage,{gizi:this.gizi,value:value});
  }

  submitLaporan()
  {
    this.navCtrl.push(LaporanharianPage);
  }

  lihatLaporan()
  {
    this.navCtrl.push(LihatlaporanPage);
  }

}
