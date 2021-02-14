import { browser, by, element, protractor } from "protractor";
import {URL} from '../utils/constants';
import { GeoPage } from "../pages/geolinkpage";
import { HomePage } from "../pages/homepage";

describe('Yandex - check geolink', () => {
    it('Change geolink and check content', async () => {
    await browser.get(URL);
    await GeoPage.ClickOnGeoLinkButton ();
    await GeoPage.inputInGeoFieldLondon ();
    await GeoPage.ClickOnSelectButton ();
    await HomePage.ClickOnMoreButton();
    let ContentLon = element.all(by.css(".services-new__more-popup-content"));

    await GeoPage.ClickOnGeoLinkButton (); 
    await GeoPage.inputInGeoFieldParis ();   
    await GeoPage.ClickOnSelectButton ();
    await HomePage.ClickOnMoreButton();
    let СontentParis = element.all(by.css(".services-new__more-popup-content"));
    
    expect(СontentParis.getText()).toEqual(ContentLon.getText()); })

    afterAll (() =>      {
      browser.close
       })
         });
