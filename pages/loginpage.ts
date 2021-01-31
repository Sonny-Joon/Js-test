import { browser, element, by, protractor} from 'protractor';
      const EC = protractor.ExpectedConditions;
      declare let allure: any;
import {waiters} from '../utils/waiters';
import { Functions } from "../pages/functions";

export class LoginPageObject {

  LoginField = element(by.css("#passp-field-login"));
  SubmitButton = element(by.css("[type=submit]"));
  PassField = element(by.css("#passp-field-passwd"));
  ErrorMessage = element(by.css(".Textinput-Hint_state_error"));

  async inputInLoginField(): Promise<void> {
    await Functions.allureStep ("inputInLoginField", async () => {
      await browser.wait(EC.presenceOf(this.LoginField), 10000);
      await this.LoginField.sendKeys("javascriptpain@yandex.by");
    });
    }

  async ClickOnSubmitButton(): Promise<void> {
    await Functions.allureStep ("ClickOnSubmitButton", async () => {
    await waiters.waitAndClick(this.SubmitButton);
  });
}

 async inputInPassField(): Promise<void> {
    await browser.wait(EC.presenceOf(this.PassField), 10000);
    await this.PassField.sendKeys("AutotestUser123");
}

 async FailinputInPassField(): Promise<void> {
  await Functions.allureStep ("FailinputInPassField", async () => {
    await browser.wait(EC.presenceOf(this.PassField), 10000);
    await this.PassField.sendKeys("NoAutotestPassword");
  });
}

async CheckInvalidPassMessage(): Promise<void> {
  await Functions.allureStep ("CheckInvalidPassMessage", async () => {
  await browser.wait(EC.presenceOf(this.ErrorMessage), 10000);
  expect(this.ErrorMessage.isDisplayed());
});
}
}


export const LoginPage = new LoginPageObject();