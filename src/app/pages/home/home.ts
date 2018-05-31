import { Component } from '@angular/core';

@Component({
  selector: 'home-page',
  template: `
    <ion-header>
      <ion-toolbar color="secondary">
        <ion-title>Home</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content padding>
      <h2>Welcome to Ionic!</h2>
      <p>
        This starter project comes with simple tabs-based layout for apps
        that are going to primarily use a Tabbed UI.
      </p>
      <p>
        Take a look at the <code>src/pages/</code> directory to add or change tabs,
        update any existing page or create new pages.
      </p>
    </ion-content>
  `,
})
export class HomePage {}
