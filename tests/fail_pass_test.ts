import { browser, by, element, protractor } from "protractor";
import { HomePage } from "../pages/homepage";
import { LoginPage } from "../pages/loginpage";
let addHomePage = new HomePage ();
let addLoginPage = new LoginPage ();
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
      await addHomePage.ClickOnLoginButton ();
     await  browser.getAllWindowHandles().then(function(handles) {
        let newWindowHandle = handles[1]; // this is your new window
        browser.switchTo().window(newWindowHandle)     });
      await addLoginPage.inputInLoginField ();
      await addLoginPage.ClickOnSubmitButton ();
      await addLoginPage.FailinputInPassField ();
      await addLoginPage.ClickOnSubmitButton ();
      const ErrorMessage = element(by.css(".Textinput-Hint_state_error"));
      await browser.wait(EC.presenceOf(ErrorMessage), 15000);
      ErrorMessage.isDisplayed().then(disp => { console.log("Error Message isDisplayed:", disp); })
     console.log(await ErrorMessage.getText());

      })
      //закрываем на всякий случай, хотя итак закроется запустить?
      afterAll (() =>      {
      browser.close
       })
       
         });

