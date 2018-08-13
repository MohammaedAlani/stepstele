import { Component,ViewChild  } from '@angular/core';
import { NavController ,NavParams, IonicPage} from 'ionic-angular';
import {FCM} from '@ionic-native/fcm';

import {Http} from '@angular/http'
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import {SocialSharing} from '@ionic-native/social-sharing'; 

@IonicPage()
@Component({
  selector: 'page-page1', 
  templateUrl: 'page1.html',
})
export class Page1Page {
  posts: any;
  doRefresh(refresher) {
    this.test()
    setTimeout(() => {
      alert("تم تحميل الاخبار الجديدة")
      refresher.complete();
    }, 3000);
  }

  constructor(private fcm: FCM ,public navCtrl: NavController,
    public navParams: NavParams, public http : Http,private socialSharing: SocialSharing) { 
    
  

      

     }
     ionViewDidLoad() {
      this.test()
    }



 test(){
  this.http.get("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.alhurra.com%2Fapi%2Fz-gvev_qt&api_key=ihwjdbrxmmwhq2rlxtwtcugordaaifwacwifuj1i&order_by=pubDate&order_dir=desc&count=25").map(res => res.json()).subscribe(data => {
        this.posts = data.items ;
        
      });
 }
   
firemass(){
  this.fcm.getToken().then(token => {
   
  });
  
  this.fcm.onNotification().subscribe(data => {
    if(data.wasTapped){
      console.log("Received in background");
      alert('reseve in back ground')
    } else {
      console.log("Received in foreground");
      alert('reseve in back ground')
    
    };
  });
  
 



}
compilemsg(index):string{
  var msg = this.posts[index].content + "-" + this.posts[index].title ;
  return msg.concat(" \n Sharing form CNC app. !");

}
regularShare(index){
  var msg = this.compilemsg(index);
  this.socialSharing.share(msg, null, null, null);
}
whatsappShare(index){
  var msg  = this.compilemsg(index);
   this.socialSharing.shareViaWhatsApp(msg, null, null);
 }
 twitterShare(index){
  var msg  = this.compilemsg(index);
  this.socialSharing.shareViaTwitter(msg, null, null);
}
facebookShare(index){
  var msg  = this.compilemsg(index);
   this.socialSharing.shareViaFacebook(msg, null, null);
 }


}
