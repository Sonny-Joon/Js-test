import { browser, element, by, protractor} from 'protractor';
      const EC = protractor.ExpectedConditions;
      
/* Class representing home yandex page.
  Methods/properties for global elements should go here. 
 */

export class LanguagePageObject {

    SelectButton = element(by.css(".select__button"));
    UkLangButton = element(by.xpath("//span[contains(.,'Українська')]"));
    SaveButton = element(by.css('.form__save'));   
    UkrLang = element(by.xpath("//a[contains(.,'Ukr')]"));
    

    
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

async checkUkrLang (): Promise <string> {
  await browser.wait(EC.presenceOf(this.UkrLang), 10000);
  return this.UkrLang.getText();
}

  
  }
  
  export const LanguagePage = new LanguagePageObject();