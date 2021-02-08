import { browser, element, by, protractor} from 'protractor';
const EC = protractor.ExpectedConditions;
import {waiters} from '../utils/waiters';
import { Functions } from "../pages/functions";

export class GeoPageObject {

  GeolinkButton = element(by.css(".geolink__reg"));
  InputField = element(by.css("#city__front-input"));
  SelectButton = element(by.css(".b-autocomplete-item__reg"));    

  async ClickOnGeoLinkButton(): Promise<void> {
    await Functions.allureStep ("ClickOnGeoLinkButton", async () => {
    await waiters.waitAndClick(this.GeolinkButton);
  });
  }

  async inputInGeoFieldLondon(): Promise<void> {
    await Functions.allureStep ("inputInGeoFieldLondon", async () => {
      await browser.wait(EC.presenceOf(this.InputField), 10000);
      await waiters.sendTextAction(this.InputField, "Лондон");
    });
  }

  async inputInGeoFieldParis(): Promise<void> {
    await Functions.allureStep ("inputInGeoFieldParis", async () => {
      await browser.wait(EC.presenceOf(this.InputField), 10000);
      await waiters.sendTextAction(this.InputField, "Париж");
    });
  }

  async inputInGeoFieldMoscow(): Promise<void> {
    await Functions.allureStep ("inputInGeoFieldParis", async () => {
      await browser.wait(EC.presenceOf(this.InputField), 10000);
      await waiters.sendTextAction(this.InputField, "Москва");
    });
  }


  async ClickOnSelectButton (): Promise<void>  {
    await Functions.allureStep ("ClickOnSelectButton", async () => {
    await waiters.waitAndClick(this.SelectButton);
  });
}
  
  }
  
  export const GeoPage = new GeoPageObject();