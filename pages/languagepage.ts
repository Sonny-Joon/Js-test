import { browser, element, by, protractor} from 'protractor';
      const EC = protractor.ExpectedConditions;
import {waiters} from '../utils/waiters';


export class LanguagePageObject {

    SelectButton = element(by.css(".select__button"));
    UkLangButton = element(by.xpath("//span[contains(.,'Українська')]"));
    SaveButton = element(by.css('.form__save'));   
    UkrLang = element(by.xpath("//a[contains(.,'Ukr')]"));
    

    
  async ClickOnSelectButton(): Promise<void> {
    await waiters.waitAndClick(this.SelectButton);
  }

  async SelectUkOption (): Promise<void>  {
    await waiters.waitAndClick(this.UkLangButton);
}

async ClickOnSaveButton (): Promise<void> {
  await waiters.waitAndClick(this.SaveButton);
}

async checkUkrLang (): Promise <string> {
  await browser.wait(EC.presenceOf(this.UkrLang), 10000);
  return this.UkrLang.getText();
}

  
  }
  
  export const LanguagePage = new LanguagePageObject();