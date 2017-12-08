import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase} from 'angularfire2/database';
import { LaporanuserPage } from '../laporanuser/laporanuser';
import { AdminregisterPage} from '../adminregister/adminregister'

/**
 * Generated class for the AdminpagePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-adminpage',
  templateUrl: 'adminpage.html',
})
export class AdminpagePage {

  constructor(private alertctrl :AlertController ,private db :AngularFireDatabase,public navCtrl: NavController, public navParams: NavParams) {
  }
  @ViewChild('makanan') makanan;
  @ViewChild('gizi') gizi;
  @ViewChild('deskripsi') deskripsi;

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminpagePage');
  }
  alert(message : string)
  {
    this.alertctrl.create({
      title: 'info !',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }
  submitMakananSekarang()
  {
    this.db.list('/makanan/').push({
      makanan : this.makanan.value,
      gizi : this.gizi.value,
      deskripsi : this.deskripsi.value
      
     })
     
     this.alert("Sukses")
    
 
  }

  registerAdminPage()
  {
    this.navCtrl.push(AdminregisterPage);
  }

 
 
  

}
