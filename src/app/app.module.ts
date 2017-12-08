import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RegisterPage } from '../pages/register/register';
import {  AdminpagePage } from '../pages/adminpage/adminpage';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { LoggedinPage } from '../pages/loggedin/loggedin';
import { AdminregisterPage } from '../pages/adminregister/adminregister';
import { LaporankesehatanPage } from '../pages/laporankesehatan/laporankesehatan';
import { RekomendasiPage } from '../pages/rekomendasi/rekomendasi';
import { HalamanmakananPage } from '../pages/halamanmakanan/halamanmakanan';
import { LaporanharianPage } from '../pages/laporanharian/laporanharian';
import { LihatlaporanPage } from '../pages/lihatlaporan/lihatlaporan';
import { LaporanuserPage } from '../pages/laporanuser/laporanuser';
import { UpdatelaporanPage } from '../pages/updatelaporan/updatelaporan';
import { DetaillaporanPage } from '../pages/detaillaporan/detaillaporan';

const firebaseAuth = {
  apiKey: "AIzaSyCWo3YNKJv9emdRdfUSS3i7iuM3ME8p7j8",
  authDomain: "ongiz-911c7.firebaseapp.com",
  databaseURL: "https://ongiz-911c7.firebaseio.com",
  projectId: "ongiz-911c7",
  storageBucket: "ongiz-911c7.appspot.com",
  messagingSenderId: "59374086749"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegisterPage,
    LoggedinPage,
    AdminregisterPage,
    AdminpagePage,
    LaporankesehatanPage,
    RekomendasiPage,
    HalamanmakananPage,
    LaporanharianPage,
    LihatlaporanPage,
    LaporanuserPage,
    UpdatelaporanPage,
    DetaillaporanPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseAuth),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RegisterPage,
    LoggedinPage,
    AdminregisterPage,
    AdminpagePage,
    LaporankesehatanPage,
    RekomendasiPage,
    HalamanmakananPage,
    LaporanharianPage,
    LihatlaporanPage,
    LaporanuserPage,
    UpdatelaporanPage,
    DetaillaporanPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
