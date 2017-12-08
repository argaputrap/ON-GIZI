import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase} from 'angularfire2/database';
import { LaporankesehatanPage} from '../laporankesehatan/laporankesehatan';

/**
 * Generated class for the LoggedinPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-loggedin',
  templateUrl: 'loggedin.html',
})
export class LoggedinPage {

  id: string;
  email : string;
  fullname : string;
  jeniskelamin : string;
  usia : number;
  berat : number;
  tinggi : number;

  constructor(private db : AngularFireDatabase,private fire :AngularFireAuth,public navCtrl: NavController, public navParams: NavParams) {
    this.id =this.fire.auth.currentUser.uid;
    this.db.object('/user/'+this.id).subscribe(data => {
      this.fullname = data.fullname;
      this.jeniskelamin = data.jeniskelamin;
      this.usia = data.usia;
      this.berat = data.berat;
      this.tinggi = data.tinggi;

    })

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoggedinPage');
  }
  cekSehat(){
    this.navCtrl.push(LaporankesehatanPage);
  }

}
