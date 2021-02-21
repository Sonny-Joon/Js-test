import { browser, by, element, protractor } from "protractor";
import { HomePage } from "../pages/homepage";
import { LoginPage } from "../pages/loginpage";
import { AccountPage } from "../pages/accountpage";
import {URL} from '../utils/constants';
import { Functions } from "../pages/functions";

describe('Яндекс Музыка', () => {
    it('Музыка', async () => {
     await browser.get(URL);
     await HomePage.ClickOnLoginButton ();
     await Functions.openNewTab ();
     await LoginPage.inputInLoginField ();
     await LoginPage.ClickOnSubmitButton ();
     await LoginPage.inputInPassField ();
     await LoginPage.ClickOnSubmitButton ();
     await AccountPage.CheckUserName ();
     await browser.get(URL);
     await HomePage.ClickOnMusicButton ();
     await Functions.openNewTab ();
      })
      afterAll (() =>      {
        browser.close
       })
                });

