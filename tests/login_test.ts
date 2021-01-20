import { browser, by, element, protractor } from "protractor";
import { HomePage } from "../pages/homepage";
import { LoginPage } from "../pages/loginpage";
import { AccountPage } from "../pages/accountpage";
import {URL} from '../utils/constants';
import { Functions } from "../pages/functions";

let addHomePage = new HomePage ();
let addLoginPage = new LoginPage ();
let addAccountPage = new AccountPage ();
let addFunctions = new Functions ();


describe('Yandex2', () => {
    it('Click login button', async () => {
     await browser.get(URL);
     await addHomePage.ClickOnLoginButton ();
     await addFunctions.openNewTab ();
      await addLoginPage.inputInLoginField ();
      await addLoginPage.ClickOnSubmitButton ();
      await addLoginPage.inputInPassField ();
      await addLoginPage.ClickOnSubmitButton ();
      await addAccountPage.CheckUserName ();
      })
      afterAll (() =>      {
      browser.close
       })
                });