import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase} from 'angularfire2/database';
import {RekomendasiPage} from '../rekomendasi/rekomendasi'

/**
 * Generated class for the LaporankesehatanPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-laporankesehatan',
  templateUrl: 'laporankesehatan.html',
})
export class LaporankesehatanPage {

  id: string;
  email : string;
  fullname : string;
  jeniskelamin : string;
  usia : number;
  berat : number;
  tinggi : number;
  bmiNilai :number;
  hasil : string;
  category : number;
  kebutuhan : string;
  karbohidrat : number;
  protein_nabati : number;
  protein_hewani : number;
  lemak : number;
  gizi : any;
  test : string;

  bmiKategori : number;
  porsiKarbohidrat : number;
  porsiProteinHewani : number;
  porsiProteinNabati : number;
  porsiLemak : number;

  bmi : number;
  constructor(private db : AngularFireDatabase,public fire :AngularFireAuth,public navCtrl: NavController, public navParams: NavParams) {
    this.id =this.fire.auth.currentUser.uid;
    this.db.object('/user/'+this.id).subscribe(data => {              //ambil data user
      this.fullname = data.fullname;
      this.jeniskelamin = data.jeniskelamin;
      this.usia = data.usia;
      this.berat = data.berat;
      this.tinggi = data.tinggi;
      this.bmiNilai = Number((this.berat/((this.tinggi/100)*(this.tinggi/100))));
      this.gizi = {};
      
// menghitung bmi
      if (this.bmiNilai < 18.5 )
      {
        this.hasil="Berat badan kurang";
        this.category = 1;
      } 
      else if (this.bmiNilai >= 18.5 && this.bmiNilai <25)
      { 
        this.hasil = "Normal";
        this.category = 2;
      } 
      else if (this.bmiNilai >= 25 && this.bmiNilai <30 )
      {
        this.hasil = "Berat badan lebih";
        this.category = 3;
      }
      else
      {
        this.hasil = "obesitas";
        this.category =4;
      }
      console.log(this.hasil);
      console.log(this.bmiNilai);    
      
      
    })
    
    this.db.list('/porsi/').subscribe(data => {
      for(var i= 0;i<data.length;i++)
      {
        this.bmiKategori = data[i].kategori_bmi;
        this.porsiKarbohidrat=data[i].porsi_karbohidrat;
        this.porsiProteinHewani = data[i].porsi_protein_hewani;
        this.porsiProteinNabati = data[i].porsi_protein_nabati;
        this.porsiLemak = data[i].porsi_lemak
      }
     
    }) 
//mengecek kebutuhan porsi gizi
    if(this.bmiKategori == 1)
    {
      this.kebutuhan = "3 Karbohidrat, 4 Protein hewani, 4 protein nabati, 2 lemak "
      
    }

    else if(this.bmiKategori == 2)
    {
      this.kebutuhan = "3 Karbohidrat, 4 Protein hewani, 3 protein nabati,2 lemak "
      this.gizi.karbohidrat=3;
      this.gizi.protein_hewani = 4;
      this.gizi.protein_nabati=3
      this.gizi.lemak=2;
    }

    else if(this.category == 3)
    {
      this.kebutuhan = "3 Karbohidrat, 3 Protein hewani, 3 protein nabati, 2 lemak "
      this.gizi.karbohidrat=3;
      this.gizi.protein_hewani = 3;
      this.gizi.protein_nabati=3;
      this.gizi.lemak=2;
    }
    else
    {
      this.kebutuhan = "2 Karbohidrat, 3 Protein hewani, 3 protein nabati, 1 lemak "
      this.gizi.karbohidrat=2;
      this.gizi.protein_hewani = 3;
      this.gizi.protein_nabati=3;
      this.gizi.lemak=1;
    }
    console.log(this.gizi,this.category);

  }
  
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad LaporankesehatanPage');
  }

  cekMakanan(gizi)
  {
    this.navCtrl.push(RekomendasiPage,this.gizi);
  }

}
