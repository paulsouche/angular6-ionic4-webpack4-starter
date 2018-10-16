import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from '../../modules/app.module';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { TabsPage } from './tabs';

describe('TabsPage', () => {
  let fixture: ComponentFixture<TabsPage>;

  beforeAll(async(() => {
    fixture = TestBed
      .configureTestingModule({
        imports: [AppModule],
      })
      .createComponent(TabsPage);

    fixture.autoDetectChanges();
  }));

  it('Should have tabs components', () => {
    const { componentInstance: { tab1Root, tab2Root, tab3Root } } = fixture;
    expect(tab1Root).toBe(HomePage);
    expect(tab2Root).toBe(AboutPage);
    expect(tab3Root).toBe(ContactPage);
  });
});
