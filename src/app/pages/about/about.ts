import { Component } from '@angular/core';

@Component({
  selector: 'about-page',
  styleUrls: ['./about.scss'],
  template: `
    <ion-header>
      <ion-toolbar color="myColor2">
        <ion-title>
          About
        </ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content padding>
      <ion-button color="secondary">
        Secondary
      </ion-button>

      <ion-button color="danger" fill="outline">
        Danger
      </ion-button>

    </ion-content>
  `,
})
export class AboutPage {}
