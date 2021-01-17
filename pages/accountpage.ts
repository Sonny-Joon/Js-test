import { browser, element, by, protractor} from 'protractor';
      const EC = protractor.ExpectedConditions;
      const AvatarButton = element(by.css(".user-account__pic .user-pic__image"));
      const LogOutButton = element(by.css("[aria-label='Выйти из аккаунта']"));
      
/* Class representing home yandex page.
  Methods/properties for global elements should go here. 
 */

export class AccountPage {
    
    static async ClickOnAvatarButton() {
      await browser.wait(EC.presenceOf(AvatarButton), 10000);
      await AvatarButton.click();
  }

  static async ClickLogOutButton ()  {
    await browser.wait(EC.presenceOf(LogOutButton), 10000);
    await LogOutButton.click();
}
  
  }
  
 