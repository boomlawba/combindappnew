import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from '@angular/fire/database';

@IonicPage()
@Component({
  selector: 'page-tab-chat',
  templateUrl: 'tab-chat.html',
})
export class TabChatPage {

  //กำหนดตัวแปรเก็บชื่อและ message
  fullname:string='';
  message:string='';


  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public db:AngularFireDatabase)

  {
      const data = JSON.parse(localStorage.getItem('userData'));
      if(data==null)
      {
        this.fullname = 'Guest';
      }else{
        this.fullname = data.userData.fullname;
      }
  }

  ionViewDidLoad(){
    
  }
  sendMessage()
  {
      this.db.list('/chat').push({
      username : this.fullname,
      message : this.message,
    }).then(()=>{
      //message send

    },(err)=>{
      //error message
      console.log(err);
    });

    //clear vhat message
    this.message ='';
  }

}
