import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase} from 'angularfire2/database';
import { UpdatelaporanPage } from '../updatelaporan/updatelaporan'
import { DetaillaporanPage } from '../detaillaporan/detaillaporan'

/**
 * Generated class for the LihatlaporanPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-lihatlaporan',
  templateUrl: 'lihatlaporan.html',
})
export class LihatlaporanPage {
  id : string;
  
  hehe : any = [];
  constructor(private db : AngularFireDatabase,private fire :AngularFireAuth,public navCtrl: NavController, public navParams: NavParams) {
    this.id =this.fire.auth.currentUser.uid;
    this.db.list('/laporan/'+this.id ).subscribe(data => {
      
      for(var i=0,j=data.length; j > -1; j--) {
        this.hehe[j-1] = data[i];
        i++;
}
    console.log(this.hehe,data)
    })
  
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LihatlaporanPage');
  }

  detail(laporanHarian)
  {
      this.navCtrl.push(DetaillaporanPage, laporanHarian);
  }

}
