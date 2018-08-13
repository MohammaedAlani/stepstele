import { Component,ViewChild  } from '@angular/core';
import { NavController ,NavParams} from 'ionic-angular';
import {FCM} from '@ionic-native/fcm';
import {Http} from '@angular/http'
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import {SocialSharing} from '@ionic-native/social-sharing'; 

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  postss: any;

  constructor(private fcm: FCM ,public navCtrl: NavController,
    public navParams: NavParams, public http : Http,private socialSharing: SocialSharing) { 
      
  

      

     }
 

}
 