import { browser, element, by, protractor} from 'protractor';
      const EC = protractor.ExpectedConditions;

/* Class representing login yandex page.
  Methods/properties for global elements should go here. 
 */
export class LoginPage {

  LoginField = element(by.css("#passp-field-login"));
  SubmitButton = element(by.css("[type=submit]"));
  PassField = element(by.css("#passp-field-passwd"));

  async inputInLoginField(): Promise<void> {
    await browser.wait(EC.presenceOf(this.LoginField), 10000);
    await this.LoginField.sendKeys("javascriptpain@yandex.by");
}

  async ClickOnSubmitButton(): Promise<void> {
    await browser.wait(EC.presenceOf(this.SubmitButton), 10000);
    await this.SubmitButton.click();
}

 async inputInPassField(): Promise<void> {
    await browser.wait(EC.presenceOf(this.PassField), 10000);
    await this.PassField.sendKeys("AutotestUser123");
}

 async FailinputInPassField(): Promise<void> {
    await browser.wait(EC.presenceOf(this.PassField), 10000);
    await this.PassField.sendKeys("NoAutotestPassword");
}

}

