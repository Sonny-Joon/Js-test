import { browser, by, element, protractor } from "protractor";
import { HomePage } from "../pages/homepage";
import { LanguagePage } from "../pages/languagepage";
import {URL} from '../utils/constants';

     describe('Yandex - language switch language', () => {
    it('Click login button', async () => {
    await browser.get(URL);
    await HomePage.ClickOnLangButton ();
    await HomePage.ClickOnLangMoreButton ();
    await LanguagePage.ClickOnSelectButton ();
    await LanguagePage.SelectUkOption ();
    await LanguagePage.ClickOnSaveButton ();
    await LanguagePage.checkUkrLang ();    
    await expect(await LanguagePage.checkUkrLang()).toEqual("Ukr"); 
                     })
      afterAll (() =>      {
      browser.close
       })
       
         });
