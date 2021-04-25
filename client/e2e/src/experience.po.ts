import { browser, by, element } from 'protractor';

export class ExperiencesPage {
  navigateTo() {
    return browser.get(browser.baseUrl + '/experience') as Promise<any>;
  }
}