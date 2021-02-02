import { browser, by, element, protractor } from "protractor";
import { HomePage } from "../pages/homepage";
import { MarketPage } from "../pages/marketpage";
import { AccountPage } from "../pages/accountpage";
import {URL} from '../utils/constants';
import { Functions } from "../pages/functions";
const EC = protractor.ExpectedConditions;

describe('Yandex - Яндекс маркет - добавление в сравнение', () => {
    it('Click login button', async () => {
     await browser.get(URL);
     await HomePage.ClickOnMarketButton ();
     await Functions.openNewTab ();
     await MarketPage.inputInSearchField ();
     await MarketPage.ClickOnSearchButton ();
     await MarketPage.addProductToCompare (0);
     await MarketPage.addProductToCompare (1);
     await MarketPage.ClickOnCompareButton ();
     await browser.wait(EC.presenceOf(MarketPage.SearchButton), 10000);
      })
      afterAll (() =>      {
      browser.close
       })
                });

