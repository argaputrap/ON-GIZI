import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireDatabaseModule} from 'angularfire2/database';
import { FirebaseApp } from 'angularfire2';

/**
 * Generated class for the HalamanmakananPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */


@Component({
  selector: 'page-halamanmakanan',
  templateUrl: 'halamanmakanan.html',
})
export class HalamanmakananPage {
  @ViewChild('porsi') porsi;
  
  makanan : any;
  gizi : any = [];
  nama : any;
  hehe: any = [];
  variabel : string;
  karbohidrat : number;
  protein_hewani : number;
  protein_nabati : number;
  lemak : number;
  kategori : number;
  id : string;
  porsiKarbohidrat : number;
  porsiProteinHewani : number;
  porsiProteinNabati : number;
  porsiLemak : number;
  
  

  constructor(public db :AngularFireDatabase ,public fire :AngularFireAuth,public navCtrl: NavController, public navParams: NavParams) {
    this.makanan = {}
    this.makanan = this.navParams.data;
    this.variabel = this.makanan.value
    this.karbohidrat = this.makanan.gizi.karbohidrat;
    this.protein_hewani =  this.makanan.gizi.protein_hewani;
    console.log(this.variabel,this.karbohidrat,this.protein_hewani);
    if(this.variabel == "karbohidrat")
      this.kategori=1;
    else if(this.variabel == "protein_hewani")
      this.kategori = 2;
    else if(this.variabel == "protein_nabati")
      this.kategori = 3;
      else
       this.kategori=4;
       
      console.log(this.kategori);
    
    if(this.kategori == 1)
    {
      console.log("masuk if",this.variabel,this.kategori);
      this.db.list('/makanan/').subscribe(data => {
        
          for(var i = 0, j= 0; i<data.length;i++)
          {
            console.log("masuk",data[i].gizi);
              if(data[i].gizi =="Karbohidrat")
              {
                  this.hehe[j]=data[i];
                  console.log(this.hehe);
                  j++;
                
              }
            
          }
        
       
      })
      
    }
    else if(this.kategori == 2)
    { 
      console.log("masuk if",this.variabel,this.kategori);
      this.db.list('/makanan/').subscribe(data => {
        for(var i = 0,j=0; i<data.length;i++)
        {
            if(data[i].gizi=="Protein Hewani")
            {
                this.hehe[j]=data[i];
                j++;
            }
          
        }
      })
    }
    else if(this.kategori == 3)
    {
      console.log("masuk if",this.variabel,this.kategori);
      this.db.list('/makanan/').subscribe(data => {
        for(var i = 0,j=0; i<data.length;i++)
        {
            if(data[i].gizi=="Protein Nabati")
            {
              this.hehe[j]=data[i];
              j++;
            }
          
        }
      })
    }
    else
    {
      console.log("masuk if",this.variabel,this.kategori);
      this.db.list('/makanan/').subscribe(data => {
        for(var i = 0,j=0; i<data.length;i++)
        {
          //console.log(this.makanan);
            if(data[i].gizi=="Lemak")
            {
              this.hehe[j]=data[i];
              j++;
            }
          
        }
      })
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HalamanmakananPage');
  }

  

 
}
