import { browser, element, by, protractor} from 'protractor';
      const EC = protractor.ExpectedConditions;

/* Class representing home yandex page.
  Methods/properties for global elements should go here. 
 */
export class HomePage {
    constructor() {}
  
    static LoginButton() {
      const loc = "[data-statlog='notifications.mail.logout.domik.login.big']";
      return element(by.css(loc));
  }
  
    static async ClickOnLoginButton() {
      await browser.wait(EC.presenceOf(HomePage.LoginButton()), 10000);
      await HomePage.LoginButton().click();
  }
  
  }
  