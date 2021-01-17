import { browser, by, element, protractor } from "protractor";
import { HomePage } from "../pages/homepage";
let goBackToPreviousTab = function() {
    browser.getAllWindowHandles().then(function (handles) {
        browser.driver.switchTo().window(handles[1]);
        browser.driver.close();
        browser.driver.switchTo().window(handles[0]);
    });
}
let openNewTab = function() {
browser.getAllWindowHandles().then(function(handles) {
        let newWindowHandle = handles[1]; // this is your new window
        browser.switchTo().window(newWindowHandle)     });
}


      beforeAll (() =>      {
        // выключаем проверку на AngularJS
        browser.waitForAngularEnabled(false);
   })
describe('Yandex5', () => {
    it('Click login button', async () => {
    // Создаем объект для работы с ожиданиями
    const EC = protractor.ExpectedConditions;
    // открываем страницу яндекса
    await browser.get('https://yandex.by/');
     //step 1 video 
    await HomePage.ClickOnVideoButton ();
    openNewTab ();
    await browser.getCurrentUrl().then(function(url) {
    console.log("URL= "+ url);
    expect(url).toContain("https://yandex.by/video"); 
    })
    goBackToPreviousTab ();
     // step 2 images
    await HomePage.ClickOnImagesButton ();
    openNewTab ();
    await browser.getCurrentUrl().then(function(url) {
    console.log("URL= "+ url);
    expect(url).toContain("https://yandex.by/images"); 
    })
    goBackToPreviousTab ();
    // step 3 news
    await HomePage.ClickOnNewsButton ();
    openNewTab ();
    await browser.getCurrentUrl().then(function(url) {
    console.log("URL= "+ url);
    expect(url).toContain("https://yandex.by/news"); 
    })
    goBackToPreviousTab ();
    // step 4 maps
    await HomePage.ClickOnMapsButton ();
    openNewTab ();
    await browser.getCurrentUrl().then(function(url) {
    console.log("URL= "+ url);
    expect(url).toContain("https://yandex.by/maps"); 
    })
    goBackToPreviousTab ();
     // step 5 market
    await HomePage.ClickOnMarketButton ();
    openNewTab ();
    await browser.getCurrentUrl().then(function(url) {
    console.log("URL= "+ url);
    expect(url).toContain("https://market.yandex.by/"); 
    })
    goBackToPreviousTab ();
     // step 6 translate
    await HomePage.ClickOnTranslateButton ();
    openNewTab ();
    await browser.getCurrentUrl().then(function(url) {
    console.log("URL= "+ url);
    expect(url).toContain("https://translate.yandex.by/"); 
    })
    goBackToPreviousTab ();
     // step 7 music
    await HomePage.ClickOnMusicButton ();
    openNewTab ();
    await browser.getCurrentUrl().then(function(url) {
    console.log("URL= "+ url);
    expect(url).toContain("https://music.yandex.by/"); 
    })
    goBackToPreviousTab ();
    })
    
      //закрываем на всякий случай, хотя итак закроется запустить?
      afterAll (() =>      {
      browser.close
       })
       
         });
         