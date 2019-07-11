import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
import { WebapiServiceProvider } from '../../providers/webapi-service/webapi-service';
import { GlobalProvider }from '../../providers/global/global'

@IonicPage()
@Component({
  selector: 'page-cousedetail',
  templateUrl: 'cousedetail.html',
})
export class CousedetailPage {

  //ตัวแปรสำหรับส่งข้อมูลไป view
  imgPath:any;
  responseData: any; //รับค่าจาก api
  //กำหนดตัวแปรสำหรับรับค่า id จากหน้า course
  getcid:number;//รับค่าcid


  constructor(
    public navCtrl: NavController,
     public navParams: NavParams,
     public alertCtrl: AlertController,
    public webapi: WebapiServiceProvider,
    public global:GlobalProvider) {

      //set global variable
      this.imgPath = this.global.baseURLAPI;
      this.getcid = this.navParams.get('cid');
    }

  ionViewDidLoad() {
    this.webapi.getData('feed_course_detail.php?cid='+this.getcid).then((result) => {
      console.log(result);
      this.responseData = result;
    }, (error) => {
      console.log(error);
    });
  }

}
