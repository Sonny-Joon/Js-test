import { browser, by, element, protractor } from "protractor";
import { HomePage } from "../pages/homepage";
import {URL} from '../utils/constants';

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
    describe('Yandex - Яндекс - навигация', () => {
      it('Click login button', async () => {
      await browser.get(URL);
      await HomePage.ClickOnVideoButton ();
      openNewTab ();
      await browser.getCurrentUrl().then(function(url) {
      console.log("URL= "+ url);
      expect(url).toContain("https://yandex.by/video"); 
      })
      goBackToPreviousTab ();

      await HomePage.ClickOnImagesButton ();
      openNewTab ();
      await browser.getCurrentUrl().then(function(url) {
      console.log("URL= "+ url);
      expect(url).toContain("https://yandex.by/images"); 
      })
      goBackToPreviousTab ();

      await HomePage.ClickOnNewsButton ();
      openNewTab ();
      await browser.getCurrentUrl().then(function(url) {
      console.log("URL= "+ url);
      expect(url).toContain("https://yandex.by/news"); 
      })
      goBackToPreviousTab ();

      await HomePage.ClickOnMapsButton ();
      openNewTab ();
      await browser.getCurrentUrl().then(function(url) {
      console.log("URL= "+ url);
      expect(url).toContain("https://yandex.by/maps"); 
      })
      goBackToPreviousTab ();

      await HomePage.ClickOnMarketButton ();
      openNewTab ();
      await browser.getCurrentUrl().then(function(url) {
      console.log("URL= "+ url);
      expect(url).toContain("https://market.yandex.by/"); 
      })
      goBackToPreviousTab ();
      
      await HomePage.ClickOnTranslateButton ();
      openNewTab ();
      await browser.getCurrentUrl().then(function(url) {
      console.log("URL= "+ url);
      expect(url).toContain("https://translate.yandex.by/"); 
      })
      goBackToPreviousTab ();

      await HomePage.ClickOnMusicButton ();
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