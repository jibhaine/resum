import { browser, by, element } from 'protractor';

export class SkillsPage {
  navigateTo() {
    return browser.get(browser.baseUrl + '/skills') as Promise<any>;
  }
}