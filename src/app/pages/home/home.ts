import { Component } from '@angular/core';
import { ActionSheetController, AlertController, LoadingController, ModalController } from '@ionic/angular';
import { HomeModalComponent } from '../../components/home-modal.component';

@Component({
  selector: 'home-page',
  styles: [
    `
      :host {
        --ion-toolbar-background-color: red;
        --ion-toolbar-text-color: white;
      }
    `
  ],
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

      <div>
        <ion-button (click)="showActionSheet()">
          Action sheet
        </ion-button>

        {{option}}
      </div>

      <div>
        <ion-button (click)="showModal()">
          Modal
        </ion-button>

        {{result}}
      </div>

      <div>
        <ion-button (click)="showAlert()">
          Alert
        </ion-button>
      </div>
    </ion-content>
  `,
})
export class HomePage {
  public option: string | undefined;
  public result: string | undefined;

  constructor(
    private actionSheetCtrl: ActionSheetController,
    private loadingCtrl: LoadingController,
    private modalCtrl: ModalController,
    private alertCtrl: AlertController,
  ) { }

  public async ngOnInit() {
    const loading = await this.loadingCtrl.create({
      content: 'Loading...',
      duration: 1000,
    });

    return loading.present();
  }

  public async showActionSheet() {
    const sheet = await this.actionSheetCtrl.create({
      header: 'My title',
      buttons: [
        {
          text: 'Option 1',
          handler: () => {
            this.option = 'Option 1'
          },
        },
        {
          text: 'Option 2',
          handler: () => {
            this.option = 'Option 2'
          },
        },
        {
          text: 'Cancel',
          role: 'cancel'
        },
      ],
      enableBackdropDismiss: true,
    })
    return sheet.present();
  }

  public async showModal() {
    const modal = await this.modalCtrl.create({
      component: HomeModalComponent,
      componentProps: {
        foo: 'bar',
      },
    });

    modal.onDidDismiss((detail) => {
      this.result = detail.data.baz;
    });

    return modal.present();
  }

  public async showAlert() {
    const alert = await this.alertCtrl.create({
      buttons: ['OK'],
      enableBackdropDismiss: false,
      message: 'My alert',
    });

    return alert.present();
  }
}
