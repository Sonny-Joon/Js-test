import { browser, by, element, protractor } from "protractor";
import { HomePage } from "../pages/homepage";
import {URL} from '../utils/constants';
import { Functions } from "../pages/functions";
    describe('Yandex - Яндекс - навигация', () => {
    it('Navigation', async () => {
      await browser.get(URL);
      await HomePage.ClickOnVideoButton ();
      await Functions.openNewTab ();
      expect(await browser.getCurrentUrl()).toContain('https://yandex.by/video');

      await browser.get(URL);
      await HomePage.ClickOnImagesButton ();
      await Functions.openNewTab ();
      expect(await browser.getCurrentUrl()).toContain('https://yandex.by/images');

      await browser.get(URL);
      await HomePage.ClickOnNewsButton ();
      await Functions.openNewTab ();
      expect(await browser.getCurrentUrl()).toContain('https://yandex.by/news');

      await browser.get(URL);
      await HomePage.ClickOnMapsButton ();
      await Functions.openNewTab ();
      expect(await browser.getCurrentUrl()).toContain('https://yandex.by/maps');

      await browser.get(URL);
      await HomePage.ClickOnMarketButton ();
      await Functions.openNewTab ();
      expect(await browser.getCurrentUrl()).toContain('https://market.yandex.by/');


      await browser.get(URL);
      await HomePage.ClickOnTranslateButton ();
      await Functions.openNewTab ();
      expect(await browser.getCurrentUrl()).toContain('https://translate.yandex.by/');

      await browser.get(URL);
      await HomePage.ClickOnMusicButton ();
      await Functions.openNewTab ();
      expect(await browser.getCurrentUrl()).toContain('https://music.yandex.by/')
      })

        afterAll (() =>      {
          browser.close
         })
  
           });