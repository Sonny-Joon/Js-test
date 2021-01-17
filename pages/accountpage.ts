import { browser, element, by, protractor} from 'protractor';
      const EC = protractor.ExpectedConditions;
      
/* Class representing home yandex page.
  Methods/properties for global elements should go here. 
 */

export class AccountPage {

  AvatarButton = element(by.css(".user-account__pic .user-pic__image"));
  LogOutButton = element(by.css("[aria-label='Выйти из аккаунта']"));
    
  async ClickOnAvatarButton(): Promise<void> {
      await browser.wait(EC.presenceOf(this.AvatarButton), 10000);
      await this.AvatarButton.click();
  }

  async ClickLogOutButton (): Promise<void>  {
    await browser.wait(EC.presenceOf(this.LogOutButton), 10000);
    await this.LogOutButton.click();
}
  
  }
  
 