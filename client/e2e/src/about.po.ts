import { browser, by, element } from 'protractor';

export class AboutPage {
  navigateTo() {
    return browser.get(browser.baseUrl + '/about') as Promise<any>;
  }
}