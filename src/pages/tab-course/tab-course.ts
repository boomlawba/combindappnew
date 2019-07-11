import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, AlertController } from 'ionic-angular';
import { WebapiServiceProvider } from '../../providers/webapi-service/webapi-service';
import { GlobalProvider }from '../../providers/global/global'
import { CousedetailPage } from '../cousedetail/cousedetail';

@IonicPage()
@Component({
  selector: 'page-tab-course',
  templateUrl: 'tab-course.html',
})
export class TabCoursePage {

  //ตัวแปรสำหรับส่งข้อมูลไป view
  responseData: any;
  imgPath:any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public app: App,
    public alertCtrl: AlertController,
    public webapi: WebapiServiceProvider,
    public global:GlobalProvider) {
      //set global variable
      this.imgPath = this.global.baseURLAPI;
  }

  ionViewDidLoad() {
    this.webapi.getData('feed_course.php').then((result) => {
      console.log(result);
      this.responseData = result;
    }, (error) => {
      console.log(error);
    });
  }
  //การrefreshหน้าจอ
  doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    //begin
    setTimeout(() => {
     
      //end
      this.webapi.getData('feed_course.php').then((result) => {
        console.log(result);
        this.responseData = result;
      }, (error) => {
        console.log(error);
      });

      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }
  //ฟังก์ชันสำหรับ push ไปหน้า detail
  courseDetail(cid)
  {
    this.app.getRootNav().push(CousedetailPage,{
      cid:cid
    });
    //alert(cid);
  }

}
