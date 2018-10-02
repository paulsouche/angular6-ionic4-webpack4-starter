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

      <div ion-grid>
        <ion-row align-items-stretch>
          <ion-col size="3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam interdum commodo elit,
            vel hendrerit erat cursus sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Aliquam non orci in turpis imperdiet consectetur at id ex. Aliquam sollicitudin enim cursus,
            ultricies erat id, lobortis quam. Donec convallis, ipsum nec condimentum blandit, felis odio
            posuere justo, vel gravida arcu massa at lorem. Nam lacinia velit vitae magna rhoncus lacinia.
            Duis ac nibh vestibulum, vestibulum tellus in, gravida diam. Curabitur vel quam mattis, bibendum augue id,
            blandit massa. Cras eu sem felis. Curabitur laoreet justo non ligula elementum, id blandit est porta.
            Phasellus aliquet malesuada erat hendrerit bibendum. Curabitur libero neque, mattis sed elit consequat,
            tincidunt luctus ligula. Morbi ac faucibus dolor. Suspendisse rutrum luctus diam quis placerat.
            Curabitur ut volutpat nisi.
          </ion-col>
          <ion-col size="6" offset="3">
            Praesent ac porttitor leo, at convallis lorem.
            Nulla quis risus ac dui iaculis dignissim vel pharetra sapien. Donec condimentum consequat risus,
            a rutrum ipsum convallis in. Vestibulum risus massa, euismod ut rhoncus vel,
            imperdiet gravida purus. Donec pretium placerat sapien, ut lobortis libero gravida ut.
            Pellentesque tempor massa id neque efficitur, id auctor nisi facilisis. Phasellus et consequat ante.
            Integer ac nisl sodales, laoreet lorem nec, convallis erat. Fusce commodo dui massa,
            id gravida dolor dignissim a. Vestibulum sit amet nulla vitae sem faucibus facilisis non non eros.
            Etiam facilisis lectus in pharetra molestie. Etiam blandit est ut rhoncus suscipit.
          </ion-col>
        </ion-row>

        <ion-row>
          <ion-col offset="3">
            Morbi ut feugiat lacus. Nam eget ipsum vestibulum, rhoncus ex eu, convallis mauris.
            Aliquam venenatis porta nibh, facilisis scelerisque felis. Quisque ornare, dolor nec gravida placerat,
            leo ipsum cursus est, ut feugiat dui mauris quis ipsum. Sed sed consectetur erat. Vivamus lacus metus,
            consectetur molestie dignissim vel, consequat bibendum enim. Vestibulum egestas,
            risus placerat dictum mattis, lectus justo ultrices enim, quis vestibulum lectus urna sed ligula.
          </ion-col>
        </ion-row>

        <ion-row align-items-stretch>
          <ion-col size="3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam interdum commodo elit,
            vel hendrerit erat cursus sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Aliquam non orci in turpis imperdiet consectetur at id ex. Aliquam sollicitudin enim cursus,
            ultricies erat id, lobortis quam. Donec convallis, ipsum nec condimentum blandit, felis odio posuere justo,
            vel gravida arcu massa at lorem. Nam lacinia velit vitae magna rhoncus lacinia. Duis ac nibh vestibulum,
            vestibulum tellus in, gravida diam. Curabitur vel quam mattis, bibendum augue id, blandit massa.
            Cras eu sem felis. Curabitur laoreet justo non ligula elementum, id blandit est porta.
            Phasellus aliquet malesuada erat hendrerit bibendum. Curabitur libero neque, mattis sed elit consequat,
            tincidunt luctus ligula. Morbi ac faucibus dolor. Suspendisse rutrum luctus diam quis placerat.
            Curabitur ut volutpat nisi.
          </ion-col>
          <ion-col size="9">
            Praesent ac porttitor leo, at convallis lorem.
            Nulla quis risus ac dui iaculis dignissim vel pharetra sapien. Donec condimentum consequat risus,
            a rutrum ipsum convallis in. Vestibulum risus massa, euismod ut rhoncus vel, imperdiet gravida purus.
            Donec pretium placerat sapien, ut lobortis libero gravida ut. Pellentesque tempor massa id neque efficitur,
            id auctor nisi facilisis. Phasellus et consequat ante. Integer ac nisl sodales, laoreet lorem nec,
            convallis erat. Fusce commodo dui massa, id gravida dolor dignissim a.
            Vestibulum sit amet nulla vitae sem faucibus facilisis non non eros.
            Etiam facilisis lectus in pharetra molestie. Etiam blandit est ut rhoncus suscipit.
          </ion-col>
        </ion-row>
      </div>

      <div ion-grid>
        <ion-col offset="3">
          Morbi ut feugiat lacus. Nam eget ipsum vestibulum, rhoncus ex eu, convallis mauris.
          Aliquam venenatis porta nibh, facilisis scelerisque felis. Quisque ornare, dolor nec gravida placerat,
          leo ipsum cursus est, ut feugiat dui mauris quis ipsum. Sed sed consectetur erat. Vivamus lacus metus,
          consectetur molestie dignissim vel, consequat bibendum enim.
          Vestibulum egestas, risus placerat dictum mattis, lectus justo ultrices enim,
          quis vestibulum lectus urna sed ligula.
        </ion-col>
      </div>
    </ion-content>
  `,
})
export class AboutPage {}
