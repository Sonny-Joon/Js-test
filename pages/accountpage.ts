import { browser, element, by, protractor} from 'protractor';
const EC = protractor.ExpectedConditions;
import {waiters} from '../utils/waiters';
import { Functions } from "../pages/functions";

export class AccountPageObject {

  AvatarButton = element(by.css(".user-account__pic .user-pic__image"));
  LogOutButton = element(by.css('[aria-label="Log out"]'));
  UserName = element(by.css(".user-account_left-name span.user-account__name"));
    
  async ClickOnAvatarButton(): Promise<void> {
    await Functions.allureStep ("ClickOnAvatarButton", async () => {
    await waiters.waitAndClick(this.AvatarButton);
  });
  }

  async ClickLogOutButton (): Promise<void>  {
    await Functions.allureStep ("ClickLogOutButton", async () => {
    await waiters.waitAndClick(this.LogOutButton);
  });
}

async CheckUserName (): Promise<void>  {
  await Functions.allureStep ("CheckUserName", async () => {
  await browser.wait(EC.visibilityOf(this.UserName), 30000);
  expect(await this.UserName.getText()).toEqual("javascriptpain"); 
});
}
  
  }
  
  export const AccountPage = new AccountPageObject();
