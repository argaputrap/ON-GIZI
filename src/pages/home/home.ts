import { Component,ViewChild } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import {AdminregisterPage} from '../adminregister/adminregister'
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireDatabaseModule } from 'angularfire2/database';
import { LoggedinPage } from '../loggedin/loggedin';
import { AdminpagePage } from '../adminpage/adminpage';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private db : AngularFireDatabase,private alertctrl : AlertController,private fire : AngularFireAuth,public navCtrl: NavController) {

  }
  @ViewChild ('email') email;
  @ViewChild ('password') password;
  status : number;
  alert(message : string)
  {
    this.alertctrl.create({
      title: 'info !',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }
  loginNow()
  {
    this.fire.auth.signInWithEmailAndPassword(this.email.value,this.password.value)
    .then(data =>
    {
      console.log(this.fire.auth.currentUser);
      var user= this.fire.auth.currentUser;
      this.alert("Sukses login");
      this.db.object('/user/'+user.uid).subscribe(data => {
        this.status = data.status;
        console.log(this.status);
        if(this.status==0){
          this.navCtrl.setRoot(LoggedinPage);
        }
        else
        {
          this.navCtrl.setRoot(AdminpagePage);
          
        }
      })
      
    })
    .catch(error =>{
      console.log(error);
      this.alert(error.message);
    } )
  }


registerPage()
{
  this.navCtrl.push(RegisterPage);
}



}
