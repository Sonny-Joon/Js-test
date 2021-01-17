import { browser, element, by, protractor} from 'protractor';
      const EC = protractor.ExpectedConditions;
      
/* Class representing home yandex page.
  Methods/properties for global elements should go here. 
 */

export class LanguagePage {

    SelectButton = element(by.css(".select__button"));
    UkLangButton = element(by.xpath("//span[contains(.,'Українська')]"));
    SaveButton = element(by.css('.form__save'));   
    
  async ClickOnSelectButton(): Promise<void> {
      await browser.wait(EC.presenceOf(this.SelectButton), 10000);
      await this.SelectButton.click();
  }

  async SelectUkOption (): Promise<void>  {
    await browser.wait(EC.presenceOf(this.UkLangButton), 10000);
    await this.UkLangButton.click();
}

async ClickOnSaveButton (): Promise<void> {
    await browser.wait(EC.presenceOf(this.SaveButton), 10000);
    await this.SaveButton.click();
}
  
  }
  