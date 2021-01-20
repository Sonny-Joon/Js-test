import { browser, by, element, protractor } from "protractor";
import { HomePage } from "../pages/homepage";
import { LanguagePage } from "../pages/languagepage";
import {URL} from '../utils/constants';

let addHomePage = new HomePage ();
let addLanguagePage = new LanguagePage ();
     describe('Yandex2', () => {
    it('Click login button', async () => {
    await browser.get(URL);
    await addHomePage.ClickOnLangButton ();
    await addHomePage.ClickOnLangMoreButton ();
    await addLanguagePage.ClickOnSelectButton ();
    await addLanguagePage.SelectUkOption ();
    await addLanguagePage.ClickOnSaveButton ();
    await addLanguagePage.checkUkrLang ();    
    await expect(await addLanguagePage.checkUkrLang()).toEqual("Ukr"); 
                     })
      afterAll (() =>      {
      browser.close
       })
       
         });
