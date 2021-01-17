import { browser, element, by, protractor} from 'protractor';
      const EC = protractor.ExpectedConditions;
      const LoginButton = element(by.css("[data-statlog='notifications.mail.logout.domik.login.big']"));
      const VideoButton = element(by.css ("[data-id='video']"));
      const ImagesButton = element(by.css ("[data-id='images']"));
      const NewsButton = element(by.css ("[data-id='news']"));
      const MapsButton = element(by.css ("[data-id='maps']"));
      const MarketButton = element(by.css ("[data-id='market']"));
      const TranslateButton = element(by.css ("[data-id='translate']"));
      const MusicButton = element(by.css ("[data-id='music']"));

     
/* Class representing home yandex page.
  Methods/properties for global elements should go here. 
 */
export class HomePage {
      
  static async ClickOnLoginButton() {
      await browser.wait(EC.presenceOf(LoginButton), 10000);
      await LoginButton.click();
  }

  static async ClickOnVideoButton() {
    await browser.wait(EC.presenceOf(VideoButton), 10000);
    await VideoButton.click();
}

static async ClickOnImagesButton() {
  await browser.wait(EC.presenceOf(ImagesButton), 10000);
  await ImagesButton.click();
}

static async ClickOnNewsButton() {
  await browser.wait(EC.presenceOf(NewsButton), 10000);
  await NewsButton.click();
}

static async ClickOnMapsButton() {
  await browser.wait(EC.presenceOf(MapsButton), 10000);
  await MapsButton.click();
}

static async ClickOnMarketButton() {
  await browser.wait(EC.presenceOf(MarketButton), 10000);
  await MarketButton.click();
}

static async ClickOnTranslateButton() {
  await browser.wait(EC.presenceOf(TranslateButton), 10000);
  await TranslateButton.click();
}

static async ClickOnMusicButton() {
  await browser.wait(EC.presenceOf(MusicButton), 10000);
  await MusicButton.click();
}
  }
   