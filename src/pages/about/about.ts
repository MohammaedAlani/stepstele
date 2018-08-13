import { Component,ViewChild  } from '@angular/core';
import { NavController ,NavParams} from 'ionic-angular';
import {FCM} from '@ionic-native/fcm';
import {Http} from '@angular/http'
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import {SocialSharing} from '@ionic-native/social-sharing'; 


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  stream : any 
  


  constructor(private fcm: FCM ,public navCtrl: NavController,
    public navParams: NavParams
    , public http : Http,private socialSharing: SocialSharing) { 
    
    
 

     }

  ionViewDidLoad() {
    console.log("hello from test")
  }



  private newMethod() {
    this.test();
  }

 test(){
  this.http.get("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.radiosawa.com%2Fpodcast%2F%3Fcount%3D20%26zoneId%3D335&api_key=ihwjdbrxmmwhq2rlxtwtcugordaaifwacwifuj1i&order_by=pubDate&order_dir=desc&count=25").map(res => res.json()).subscribe(data =>{
     this.stream = data.items
   })
 }
 

} 
