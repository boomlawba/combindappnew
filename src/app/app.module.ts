import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabHomePage } from '../pages/tab-home/tab-home';
import { TabCoursePage } from '../pages/tab-course/tab-course';
import { TabServicePage } from '../pages/tab-service/tab-service';
import { TabContactPage } from '../pages/tab-contact/tab-contact';
import { TabArticlePage } from '../pages/tab-article/tab-article';
import { TabsPage } from '../pages/tabs/tabs';
import { SidePaymentPage } from '../pages/side-payment/side-payment';
import { SidePortfolioPage } from '../pages/side-portfolio/side-portfolio';
import { SideSettingPage } from '../pages/side-setting/side-setting';
import { SideSchehulePage } from '../pages/side-schehule/side-schehule';
import { RegisterPage } from '../pages/register/register';
import { LoginPage } from '../pages/login/login';
import { WebapiServiceProvider } from '../providers/webapi-service/webapi-service';
import { HttpModule } from '@angular/http';
import { GlobalProvider } from '../providers/global/global';
import { CousedetailPage } from '../pages/cousedetail/cousedetail';

@NgModule({
  declarations: [
    MyApp,
    TabHomePage,
    TabCoursePage,
    TabServicePage,
    TabContactPage,
    TabArticlePage,
    TabsPage,
    SidePaymentPage,
    SidePortfolioPage,
    SideSettingPage,
    SideSchehulePage,
    RegisterPage,
    LoginPage,
    CousedetailPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabHomePage,
    TabCoursePage,
    TabServicePage,
    TabContactPage,
    TabArticlePage,
    TabsPage,
    SidePaymentPage,
    SidePortfolioPage,
    SideSettingPage,
    SideSchehulePage,
    RegisterPage,
    LoginPage,
    CousedetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    WebapiServiceProvider,
    GlobalProvider
  ]
})
export class AppModule {}
