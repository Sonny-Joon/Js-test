import { browser, by, element, protractor } from "protractor";
import { HomePage } from "../pages/homepage";
import {URL} from '../utils/constants';
let addHomePage = new HomePage ();

let openNewTab = function() {	
  browser.getAllWindowHandles().then(function(handles) {	
          let newWindowHandle = handles[1]; 	
          browser.switchTo().window(newWindowHandle)     });	
  }
let goBackToPreviousTab = function() {
    browser.getAllWindowHandles().then(function (handles) {	
        browser.driver.switchTo().window(handles[1]);	
        browser.driver.close();	
        browser.driver.switchTo().window(handles[0])    });	
    }
    describe('Yandex5', () => {
      it('Click login button', async () => {
      await browser.get(URL);
      await addHomePage.ClickOnVideoButton ();
      openNewTab ();
      await browser.getCurrentUrl().then(function(url) {
      console.log("URL= "+ url);
      expect(url).toContain("https://yandex.by/video"); 
      })
      goBackToPreviousTab ();

      await addHomePage.ClickOnImagesButton ();
      openNewTab ();
      await browser.getCurrentUrl().then(function(url) {
      console.log("URL= "+ url);
      expect(url).toContain("https://yandex.by/images"); 
      })
      goBackToPreviousTab ();

      await addHomePage.ClickOnNewsButton ();
      openNewTab ();
      await browser.getCurrentUrl().then(function(url) {
      console.log("URL= "+ url);
      expect(url).toContain("https://yandex.by/news"); 
      })
      goBackToPreviousTab ();

      await addHomePage.ClickOnMapsButton ();
      openNewTab ();
      await browser.getCurrentUrl().then(function(url) {
      console.log("URL= "+ url);
      expect(url).toContain("https://yandex.by/maps"); 
      })
      goBackToPreviousTab ();

      await addHomePage.ClickOnMarketButton ();
      openNewTab ();
      await browser.getCurrentUrl().then(function(url) {
      console.log("URL= "+ url);
      expect(url).toContain("https://market.yandex.by/"); 
      })
      goBackToPreviousTab ();
      
      await addHomePage.ClickOnTranslateButton ();
      openNewTab ();
      await browser.getCurrentUrl().then(function(url) {
      console.log("URL= "+ url);
      expect(url).toContain("https://translate.yandex.by/"); 
      })
      goBackToPreviousTab ();

      await addHomePage.ClickOnMusicButton ();
      openNewTab ();
      await browser.getCurrentUrl().then(function(url) {
      console.log("URL= "+ url);
      expect(url).toContain("https://music.yandex.by/"); 
      })
      goBackToPreviousTab ();
      })

        afterAll (() =>      {
        browser.close
         })
  
           });