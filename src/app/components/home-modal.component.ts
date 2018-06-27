import { Component } from '@angular/core';

@Component({
  selector: 'home-modal',
  styles: [
    `
      .home-modal {
        height: 100%;
        width: 100%;
        background: white;
        padding: 15px;
      }
    `
  ],
  template: `
    <div class="home-modal">
      My Modal

      I've props {{foo}}

      And I can dismiss

      <ion-button (click)="close()">
        Close
      </ion-button>
    </div>
  `
})
export class HomeModalComponent {
  public modal: HTMLIonModalElement;
  public foo: string;

  public close() {
    this.modal.dataset
    this.modal.dismiss({ baz: 'quux' });
  }
}