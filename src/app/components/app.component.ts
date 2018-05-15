import { Component } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Platform } from '@ionic/angular';
import { TabsPage } from '../pages/tabs/tabs';

@Component({
  selector: 'ion-app',
  template: `
    <ion-nav [root]="rootPage"></ion-nav>
  `,
})
export class AppComponent {
  public rootPage: any = TabsPage;

  constructor(platform: Platform) {
    platform.ready()
      .then(() => {
        StatusBar.styleDefault();
        SplashScreen.hide();
      });
  }
}
