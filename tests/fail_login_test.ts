import { browser, by, element, protractor } from "protractor";
import { HomePage } from "../pages/homepage";
import { LoginPage } from "../pages/loginpage";
import {URL} from '../utils/constants';
import { Functions } from "../pages/functions";

describe('Yandex - Яндекс почта - невалидный логин', () => {
    it('Invalid Login', async () => {
     await browser.get(URL);
     await HomePage.ClickOnLoginButton ();
     await Functions.openNewTab ();
     await LoginPage.FailinputInLoginField ();
     await LoginPage.ClickOnSubmitButton ();
     await LoginPage.CheckErrorMessage ();
      })
      afterAll (async () =>      {
            await browser.refresh
           })
       
         });

