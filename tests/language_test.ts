import { browser, by, element, protractor } from "protractor";
import { HomePage } from "../pages/homepage";
import { LanguagePage } from "../pages/languagepage";
let addHomePage = new HomePage ();
let addLanguagePage = new LanguagePage ();
      beforeAll (() =>      {
        // выключаем проверку на AngularJS
        browser.waitForAngularEnabled(false);
   })
describe('Yandex2', () => {
    it('Click login button', async () => {
        // Создаем объект для работы с ожиданиями
        const EC = protractor.ExpectedConditions;
        // открываем страницу яндекса
      await browser.get('https://yandex.by/');
      await addHomePage.ClickOnLangButton ();
      await addHomePage.ClickOnLangMoreButton ();
      await addLanguagePage.ClickOnSelectButton ();
      await addLanguagePage.SelectUkOption ();
      await addLanguagePage.ClickOnSaveButton ();
      const UkrLang = element(by.xpath("//a[contains(.,'Ukr')]"));
      await browser.wait(EC.presenceOf(UkrLang), 10000);
      await expect(await UkrLang.getText()).toEqual("Ukr"); 
                     })
      //закрываем на всякий случай, хотя итак закроется запустить?
      afterAll (() =>      {
      browser.close
       })
       
         });
