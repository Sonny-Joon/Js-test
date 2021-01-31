import { browser, element, by, protractor} from 'protractor';
      const EC = protractor.ExpectedConditions;
      import {waiters} from '../utils/waiters';
      import { Functions } from "../pages/functions";

/* Class representing home yandex page.
  Methods/properties for global elements should go here. 
  
 */
declare let allure: any;

export class HomePageObject {

  LoginButton = element(by.css("[data-statlog='notifications.mail.logout.domik.login.big']"));
  VideoButton = element(by.css ("[data-id='video']"));
  ImagesButton = element(by.css ("[data-id='images']"));
  NewsButton = element(by.css ("[data-id='news']"));
  MapsButton = element(by.css ("[data-id='maps']"));
  MarketButton = element(by.css ("[data-id='market']"));
  TranslateButton = element(by.css ("[data-id='translate']"));
  MusicButton = element(by.css ("[data-id='music']"));
  LangButton = element(by.css (".b-langs"));
  LangMoreButton = element(by.css ('[data-statlog="head.lang.more"]'));
  
  async ClickOnLoginButton(): Promise<void> {
    await Functions.allureStep ("ClickOnLoginButton", async () => {
      await waiters.waitAndClick(this.LoginButton);
     });
    
  }

  async ClickOnVideoButton(): Promise<void> {
    await waiters.waitAndClick(this.VideoButton);
}

  async ClickOnImagesButton(): Promise<void> {
    await waiters.waitAndClick(this.ImagesButton);
}

 async ClickOnNewsButton(): Promise<void> {
  await waiters.waitAndClick(this.NewsButton);
}

async ClickOnMapsButton(): Promise<void> {
  await waiters.waitAndClick(this.MapsButton);
}

async ClickOnMarketButton(): Promise<void> {
  await waiters.waitAndClick(this.MarketButton);
}

async ClickOnTranslateButton(): Promise<void> {
  await waiters.waitAndClick(this.TranslateButton);
}

async ClickOnMusicButton(): Promise<void> {
  await waiters.waitAndClick(this.MusicButton);
}

async ClickOnLangButton(): Promise<void> {
  await waiters.waitAndClick(this.LangButton);
}

async ClickOnLangMoreButton(): Promise<void> {
  await waiters.waitAndClick(this.LangMoreButton);
}

async CheckLogOut(): Promise<void> {
  expect(await browser.getCurrentUrl()).toContain("https://passport.yandex.by/"); 
}

async CheckVideoPage(): Promise<void> {
  expect(await browser.getCurrentUrl()).toContain("https://yandex.by/video"); 
}


  }

  export const HomePage = new HomePageObject();