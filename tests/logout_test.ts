import { browser, by, element, protractor } from "protractor";
import { HomePage } from "../pages/homepage";
import { LoginPage } from "../pages/loginpage";
import { AccountPage } from "../pages/accountpage";

      beforeAll (() =>      {
        // выключаем проверку на AngularJS
        browser.waitForAngularEnabled(false);
   })
describe('Yandex3', () => {
    it('Click login button', async () => {
        // Создаем объект для работы с ожиданиями
        const EC = protractor.ExpectedConditions;
        // открываем страницу яндекса
      await browser.get('https://yandex.by/');
      await HomePage.ClickOnLoginButton ();
     await  browser.getAllWindowHandles().then(function(handles) {
        let newWindowHandle = handles[1]; // this is your new window
        browser.switchTo().window(newWindowHandle)     });
      await LoginPage.inputInLoginField ();
      await LoginPage.ClickOnSubmitButton ();
      await LoginPage.inputInPassField ();
      await LoginPage.ClickOnSubmitButton ();
      await AccountPage.ClickOnAvatarButton ();
      await AccountPage.ClickLogOutButton ();
      await browser.wait(EC.urlContains('mail.yandex.by'), 10000);

      })
      //закрываем на всякий случай, хотя итак закроется запустить?
      afterAll (() =>      {
      browser.close
       })
       
         });

         
