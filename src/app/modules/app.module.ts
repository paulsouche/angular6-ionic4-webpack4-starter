import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { AppComponent } from '../components/app.component';
import { HomeModalComponent } from '../components/home-modal.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

@NgModule({
  declarations: [
    AppComponent,
    HomeModalComponent,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    AppComponent,
    HomeModalComponent,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
  ],
})
export class AppModule {}
