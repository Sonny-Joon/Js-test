import { browser, element, by, protractor} from 'protractor';
      const EC = protractor.ExpectedConditions;
     
/* Class representing home yandex page.
  Methods/properties for global elements should go here. 
 */
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
    await browser.wait(EC.presenceOf(this.LoginButton), 10000);
    await this.LoginButton.click();
  }

  async ClickOnVideoButton(): Promise<void> {
    await browser.wait(EC.presenceOf(this.VideoButton), 10000);
    await this.VideoButton.click();
}

  async ClickOnImagesButton(): Promise<void> {
    await browser.wait(EC.presenceOf(this.ImagesButton), 10000);
    await this.ImagesButton.click();
}

 async ClickOnNewsButton(): Promise<void> {
    await browser.wait(EC.presenceOf(this.NewsButton), 10000);
    await this.NewsButton.click();
}

async ClickOnMapsButton(): Promise<void> {
  await browser.wait(EC.presenceOf(this.MapsButton), 10000);
  await this.MapsButton.click();
}

async ClickOnMarketButton(): Promise<void> {
  await browser.wait(EC.presenceOf(this.MarketButton), 10000);
  await this.MarketButton.click();
}

async ClickOnTranslateButton(): Promise<void> {
  await browser.wait(EC.presenceOf(this.TranslateButton), 10000);
  await this.TranslateButton.click();
}

async ClickOnMusicButton(): Promise<void> {
  await browser.wait(EC.presenceOf(this.MusicButton), 10000);
  await this.MusicButton.click();
}

async ClickOnLangButton(): Promise<void> {
  await browser.wait(EC.presenceOf(this.LangButton), 10000);
  await this.LangButton.click();
}

async ClickOnLangMoreButton(): Promise<void> {
  await browser.wait(EC.presenceOf(this.LangMoreButton), 10000);
  await this.LangMoreButton.click();
}

async CheckLogOut(): Promise<void> {
  expect(await browser.getCurrentUrl()).toContain("https://passport.yandex.by/"); 
}

async CheckVideoPage(): Promise<void> {
  expect(await browser.getCurrentUrl()).toContain("https://yandex.by/video"); 
}


  }

  export const HomePage = new HomePageObject();