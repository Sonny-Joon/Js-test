import { browser, element, by, protractor} from 'protractor';
      const EC = protractor.ExpectedConditions;

/* Class representing login yandex page.
  Methods/properties for global elements should go here. 
 */
export class LoginPage {
  constructor() {}

  static LoginField() {
    const loc = "#passp-field-login";
    return element(by.css(loc));
  }

  static async inputInLoginField() {
    await browser.wait(EC.presenceOf(LoginPage.LoginField()), 10000);
    await LoginPage.LoginField().sendKeys("javascriptpain@yandex.by");
}

  static SubmitButton() {
    const loc = "[type=submit]";
    return element(by.css(loc));
}

  static async ClickOnSubmitButton() {
    await browser.wait(EC.presenceOf(LoginPage.SubmitButton()), 10000);
    await LoginPage.SubmitButton().click();
}

static PassField() {
    const loc = "#passp-field-passwd";
    return element(by.css(loc));
  }

  static async inputInPassField() {
    await browser.wait(EC.presenceOf(LoginPage.PassField()), 10000);
    await LoginPage.PassField().sendKeys("AutotestUser123");
}

}

