import { Component } from '@angular/core';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

@Component({
  selector: 'tabs-page',
  template: `
    <ion-tabs>
      <ion-tab [component]="tab1Root" label="Home" icon="home"></ion-tab>
      <ion-tab [component]="tab2Root" label="About" icon="information-circle"></ion-tab>
      <ion-tab [component]="tab3Root" label="Contact" icon="contacts"></ion-tab>
    </ion-tabs>
  `,
})
export class TabsPage {
  public tab1Root = HomePage;
  public tab2Root = AboutPage;
  public tab3Root = ContactPage;
}
