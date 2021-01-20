import { browser, by, element, protractor } from "protractor";
import { HomePage } from "../pages/homepage";
import {URL} from '../utils/constants';
import { Functions } from "../pages/functions";

let addHomePage = new HomePage ();
let addFunctions = new Functions ();

describe('Yandex5', () => {
    it('Click login button', async () => {
    await browser.get(URL);
    await addHomePage.ClickOnVideoButton ();
    await addFunctions.openNewTab ();
    await browser.getCurrentUrl().then(function(url) {
    console.log("URL= "+ url);
    expect(url).toContain("https://yandex.by/video"); 
    })
    await addFunctions.goBackToPreviousTab ();
    await addHomePage.ClickOnImagesButton ();
    await addFunctions.openNewTab ();
    await browser.getCurrentUrl().then(function(url) {
    console.log("URL= "+ url);
    expect(url).toContain("https://yandex.by/images"); 
    })
    await addFunctions.goBackToPreviousTab ();
    await addHomePage.ClickOnNewsButton ();
    await addFunctions.openNewTab ();
    await browser.getCurrentUrl().then(function(url) {
    console.log("URL= "+ url);
    expect(url).toContain("https://yandex.by/news"); 
    })
    await addFunctions.goBackToPreviousTab ();
    await addHomePage.ClickOnMapsButton ();
    await addFunctions.openNewTab ();
    await browser.getCurrentUrl().then(function(url) {
    console.log("URL= "+ url);
    expect(url).toContain("https://yandex.by/maps"); 
    })
    await addFunctions.goBackToPreviousTab ();
    await addHomePage.ClickOnMarketButton ();
    await addFunctions.openNewTab ();
    await browser.getCurrentUrl().then(function(url) {
    console.log("URL= "+ url);
    expect(url).toContain("https://market.yandex.by/"); 
    })
    await addFunctions.goBackToPreviousTab ();
    await addHomePage.ClickOnTranslateButton ();
    await addFunctions.openNewTab ();
    await browser.getCurrentUrl().then(function(url) {
    console.log("URL= "+ url);
    expect(url).toContain("https://translate.yandex.by/"); 
    })
    await addFunctions.goBackToPreviousTab ();
    await addHomePage.ClickOnMusicButton ();
    await addFunctions.openNewTab ();
    await browser.getCurrentUrl().then(function(url) {
    console.log("URL= "+ url);
    expect(url).toContain("https://music.yandex.by/"); 
    })
    await addFunctions.goBackToPreviousTab ();
    })
          afterAll (() =>      {
      browser.close
       })
       
         });
         