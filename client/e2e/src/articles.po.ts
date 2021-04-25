import { browser, by, element } from 'protractor';

export class ArticlesPage {
  navigateTo() {
    return browser.get(browser.baseUrl + '/articles') as Promise<any>;
  }
}