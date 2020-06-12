import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { DatabaseProvider } from '../providers/database/database';
import { timer } from 'rxjs/observable/timer';


@Component({
 templateUrl: 'app.html'
})
export class MyApp {
rootPage:any = LoginPage;
showSplash = true; // <-- show animation
 constructor(private platform: Platform,private statusBar: StatusBar, splashScreen:SplashScreen, private databaseProvider: DatabaseProvider) 
 {
 this.initialieApp();
 this.databaseProvider.createDatabase();
 platform.ready().then(() => {
 // Okay, so the platform is ready and our plugins areavailable.
 // Here you can do any higher level native things you mightneed.
 statusBar.styleDefault();
 splashScreen.hide();

 

 timer(3000).subscribe(() => this.showSplash = false)
// <-- hide animation after 3s
 });
 }

 initialieApp() {
    this.statusBar.overlaysWebView(true);
    if (this.platform.is('android')) {
    this.statusBar.backgroundColorByHexString("#33000000");
    }
}

}