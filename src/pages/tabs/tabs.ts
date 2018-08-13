import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { Page1Page } from '../page1/page1';
import {Page2Page} from '../page2/page2';
import { Page3Page } from '../page3/page3';
import {Page4Page} from '../page4/page4';
import {Page5Page} from '../page5/page5';
import {Page6Page} from '../page6/page6';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = Page4Page;
  tab3Root = Page3Page;
  tab4Root = Page1Page;
  tab5Root = Page2Page;
  tab6Root = Page5Page;
  tab7Root = Page6Page;

  constructor() {

  }
}
