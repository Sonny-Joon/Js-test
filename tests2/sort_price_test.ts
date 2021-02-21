import { browser, by, element, protractor } from "protractor";
import { HomePage } from "../pages/homepage";
import { MarketPage } from "../pages/marketpage";
import {URL} from '../utils/constants';
import { Functions } from "../pages/functions";
import { GeoPage } from "../pages/geolinkpage";
const EC = protractor.ExpectedConditions;

describe('Yandex - Яндекс маркет - сортировка по цене', () => {
    it('Click login button', async () => {
     await browser.get(URL);
     await GeoPage.ClickOnGeoLinkButton ();
     await GeoPage.inputInGeoFieldMoscow ();
     await GeoPage.ClickOnSelectButton ();
     await HomePage.ClickOnMarketButton ();
     await Functions.openNewTab ();
     await MarketPage. AdvertSkipClick();
     await MarketPage.ClickOnElectronicButton ();
     await MarketPage.ClickOnCamerasButton ();
     await MarketPage.ClickOnCameras2Button ();
     await MarketPage.ClickOnSortButton();
     await MarketPage.ClickOnSort2Button();
     await browser.wait(EC.presenceOf(MarketPage.cost2), 10000);
     const productCost = await MarketPage.cost.getText();
     console.log ("цены:",productCost)
     //добавтиь проверку которую возьмет в массиве ценики и проверит что 0>1, 1>2 и т.п.
      })
      afterAll (() =>      {
      browser.close
       })
                });

