import { browser, element, by, protractor} from 'protractor';
      const EC = protractor.ExpectedConditions;
      const LoginField = element(by.css("#passp-field-login"));
      const SubmitButton = element(by.css("[type=submit]"));
      const PassField = element(by.css("#passp-field-passwd"));


/* Class representing login yandex page.
  Methods/properties for global elements should go here. 
 */
export class LoginPage {

  static async inputInLoginField() {
    await browser.wait(EC.presenceOf(LoginField), 10000);
    await LoginField.sendKeys("javascriptpain@yandex.by");
}

  static async ClickOnSubmitButton() {
    await browser.wait(EC.presenceOf(SubmitButton), 10000);
    await SubmitButton.click();
}

  static async inputInPassField() {
    await browser.wait(EC.presenceOf(PassField), 10000);
    await PassField.sendKeys("AutotestUser123");
}

}

