import { browser, by, element, protractor } from "protractor";
import { HomePage } from "../pages/homepage";
import { LoginPage } from "../pages/loginpage";
import { AccountPage } from "../pages/accountpage";
import {URL} from '../utils/constants';
import { Functions } from "../pages/functions";

let addFunctions = new Functions ();


describe('Yandex2', () => {
    it('Click login button', async () => {
     await browser.get(URL);
     await HomePage.ClickOnLoginButton ();
     await addFunctions.openNewTab ();
      await LoginPage.inputInLoginField ();
      await LoginPage.ClickOnSubmitButton ();
      await LoginPage.inputInPassField ();
      await LoginPage.ClickOnSubmitButton ();
      await AccountPage.CheckUserName ();
      })
      afterAll (() =>      {
      browser.close
       })
                });