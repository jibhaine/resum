import { browser, by, element } from 'protractor';

export class ArticlesPage {
  navigateTo() {
    return browser.get(browser.baseUrl + '/projects') as Promise<any>;
  }
}