import { browser, element, by, protractor} from 'protractor';
      const EC = protractor.ExpectedConditions;
      const LoginButton = element(by.css("[data-statlog='notifications.mail.logout.domik.login.big']"));
      browser.driver.manage().window().maximize();


/* Class representing home yandex page.
  Methods/properties for global elements should go here. 
 */
export class HomePage {
    
    static async ClickOnLoginButton() {
      await browser.wait(EC.presenceOf(LoginButton), 10000);
      await LoginButton.click();
  }
  
  }
  