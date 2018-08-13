import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import {Page1Page} from '../pages/page1/page1';
import {Page2Page} from '../pages/page2/page2';
import {Page3Page} from '../pages/page3/page3';
import {Page4Page} from '../pages/page4/page4';
import {Page5Page} from '../pages/page5/page5';
import {Page6Page} from '../pages/page6/page6';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FCM } from '@ionic-native/fcm';
import { SuperTabsModule } from 'ionic2-super-tabs';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {HttpModule } from '@angular/http';
import {SocialSharing} from '@ionic-native/social-sharing';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    Page1Page,
    Page2Page,
    Page3Page,
    Page4Page,
    Page5Page,
    Page6Page,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    SuperTabsModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    Page2Page,
    Page1Page,
    Page3Page,
    Page4Page,
    Page5Page,
    Page6Page,
    TabsPage
  ],
  providers: [
    StatusBar,
    FCM,
    HttpClient,
    FCM,
    SocialSharing,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
