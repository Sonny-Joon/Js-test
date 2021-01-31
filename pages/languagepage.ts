import { browser, element, by, protractor} from 'protractor';
      const EC = protractor.ExpectedConditions;
import {waiters} from '../utils/waiters';
import { Functions } from "../pages/functions";


export class LanguagePageObject {

    SelectButton = element(by.css(".select__button"));
    UkLangButton = element(by.xpath("//span[contains(.,'Українська')]"));
    SaveButton = element(by.css('.form__save'));   
    UkrLang = element(by.xpath("//a[contains(.,'Ukr')]"));
    

    
  async ClickOnSelectButton(): Promise<void> {
    await Functions.allureStep ("ClickOnSelectButton", async () => {
    await waiters.waitAndClick(this.SelectButton);
  });
  }

  async SelectUkOption (): Promise<void>  {
    await Functions.allureStep ("SelectUkOption", async () => {
    await waiters.waitAndClick(this.UkLangButton);
  });
}

async ClickOnSaveButton (): Promise<void> {
  await Functions.allureStep ("ClickOnSaveButton", async () => {
  await waiters.waitAndClick(this.SaveButton);
});
}

async checkUkrLang (): Promise <string> {
  await Functions.allureStep ("checkUkrLang", async () => {
  await browser.wait(EC.presenceOf(this.UkrLang), 10000);
});
  return this.UkrLang.getText();
  
}

  
  }
  
  export const LanguagePage = new LanguagePageObject();