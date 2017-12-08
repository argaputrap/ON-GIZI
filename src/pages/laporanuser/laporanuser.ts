import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase} from 'angularfire2/database';

/**
 * Generated class for the LaporanuserPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-laporanuser',
  templateUrl: 'laporanuser.html',
})
export class LaporanuserPage {
  id : string;
  nama : string;
  myDate : string;
  
  constructor(private db : AngularFireDatabase,private fire :AngularFireAuth,public navCtrl: NavController, public navParams: NavParams) {
    
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LaporanuserPage');
  }

}
