import { browser, by, element } from 'protractor';

export class DashboardPage {

  navigateTo() {
    return browser.get('dashboard');
  }

  getPageSpinner() {
    return element(by.css('["id=spinner"])'));
  }

}
