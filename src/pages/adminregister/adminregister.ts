import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { Item } from 'ionic-angular/components/item/item';

/**
 * Generated class for the AdminregisterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-adminregister',
  templateUrl: 'adminregister.html',
})
export class AdminregisterPage {

  constructor(private fire :AngularFireAuth ,private db : AngularFireDatabase,private alertctrl : AlertController,public navCtrl: NavController, public navParams: NavParams) {
  }

  @ViewChild('email') email;
  @ViewChild('password') password;
  @ViewChild('fullname') fullname;
  @ViewChild('jeniskelamin') jeniskelamin;
  @ViewChild('usia') usia;
  @ViewChild('berat') berat;
  @ViewChild('tinggi') tinggi;

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminregisterPage');
  }
  alert(message : string)
  {
    this.alertctrl.create({
      title: 'info !',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }
 
  submitNow()
  {
  
      this.fire.auth.createUserWithEmailAndPassword(this.email.value,this.password.value)
      .then(data =>{
        console.log('got data',data);
        console.log(this.email.value);
        this.db.object('/user/'+data.uid).set({
          id : data.uid,
          fullname : this.fullname.value,
          email : this.email.value,
          jeniskelamin : this.jeniskelamin.value,
          usia : this.usia.value,
          berat : this.berat.value,
          tinggi : this.tinggi.value,
          status : 1
       })
        this.alert("Sukses")
        })
      .catch(error =>
      {
        console.log(error);
        this.alert(error.message);
      })
    
    
   
  }

}
