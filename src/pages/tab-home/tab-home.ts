import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,App} from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-tab-home',
  templateUrl: 'tab-home.html',
})
export class TabHomePage {

  userDetail:any;
  loginsStatus:boolean;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public app:App) {

      //อ่านค่าจาก Local Storage
     const data = JSON.parse(localStorage.getItem('userData'));
     if(data==null)
     {
     this.userDetail = {fullname:'Your are guest'};
     this.loginsStatus = true;
     }else{
     this.userDetail = data.userData;
     this.loginsStatus = false;
  }
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabHomePage');
  }

  register()
  {
    this.app.getRootNav().push(RegisterPage);
  }

  login()
  {
    this.app.getRootNav().push(LoginPage);
  }

}