import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FCM} from '@ionic-native/fcm';
import {Http} from '@angular/http'
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import {SocialSharing} from '@ionic-native/social-sharing'; 


@IonicPage()
@Component({
  selector: 'page-page5',
  templateUrl: 'page5.html',
})
export class Page5Page {
  stream : any 
  doRefresh(refresher) {
    this.test()
    setTimeout(() => {
      alert("تم تحميل الاخبار الجديدة")
      refresher.complete();
    }, 3000);
  }


  constructor(private fcm: FCM ,public navCtrl: NavController,
    public navParams: NavParams
    , public http : Http,private socialSharing: SocialSharing) { 
    
    
 

     }

  ionViewDidLoad() {
    this.test()
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
