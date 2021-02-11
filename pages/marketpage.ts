import { browser, element, by, protractor} from 'protractor';
const EC = protractor.ExpectedConditions;
import {waiters} from '../utils/waiters';
import { Functions } from "./functions";

export class MarketPageObject {

    SearchField = element(by.css('[id="header-search"]'));
    SearchButton = element(by.css('[type="submit"]'));
    AddToCompareButton = element.all(by.css('._1CXljk9rtd'));
    CompareButton = element(by.css('._3oDLePObQ1'));
    ProductName = element.all(by.css('._3dCGE8Y9v3'));
    ProductName3 = element(by.css('._3dCGE8Y9v3'));
    ProductInCompareName = element.all(by.css('.PzFNvA3yUm'));
    DeleteCompareButton = element(by.css('._1KU3sPkiT1'));
    DeleteCompareElement = element(by.css('[data-apiary-widget-name="@MarketNode/CompareEmpty"]'));
    ElectronicButton = element(by.css('._3z8GfB4w3a'));
    AdvertSkip = element(by.css('._1LRo65x8Fi'));
    CameraButton = element(by.css('a[href*="ekshn"]'));
    CameraButton2 = element(by.css('._1YdrMWBuYy'))
    SortPriceButton = element(by.css('[data-autotest-id="dprice"]'));
    SortPriceButton2 = element(by.css('[data-autotest-id="aprice"]'));
  

    async inputInSearchField(): Promise<void> {
        await Functions.allureStep ("inputInSearchField", async () => {
          await browser.wait(EC.presenceOf(this.SearchField), 10000);
          await this.SearchField.sendKeys("Note 8");
        });
        }

    async ClickOnSearchButton(): Promise<void> {
          await Functions.allureStep ("ClickOnSearchButton", async () => {
          await waiters.waitAndClick(this.SearchButton);
        });
      }
  
      async addProductToCompare (number: number): Promise<void> {
        const elementComp = this.AddToCompareButton.get(number);
        await Functions.allureStep ("addProductToCompare", async () => {
          await browser.wait(EC.presenceOf(elementComp), 10000);
          await browser.executeScript("arguments[0].click();", elementComp.getWebElement());
      });
      }



      async ClickOnCompareButton(): Promise<void> {
        await Functions.allureStep ("ClickOnCompareButton", async () => {
        await waiters.waitAndClick(this.CompareButton);
      });
    }
    async ClickOnDeleteCompareButton(): Promise<void> {
      await Functions.allureStep ("ClickOnDeleteCompareButton", async () => {
      await waiters.waitAndClick(this.DeleteCompareButton);
    });
  }

  async ClickOnElectronicButton(): Promise<void> {
    await Functions.allureStep ("ClickOnElectronicButton", async () => {
    await waiters.waitAndClick(this.ElectronicButton);
  });
}
async AdvertSkipClick(): Promise<void> {
  await Functions.allureStep ("AdvertSkipClick", async () => {
  await waiters.waitAndClick(this.AdvertSkip);
});
}

async ClickOnCamerasButton(): Promise<void> {
  await Functions.allureStep ("ClickOnCamerasButton", async () => {
  await waiters.waitAndClick(this.CameraButton);
});
}

async ClickOnSortButton(): Promise<void> {
  await Functions.allureStep ("ClickOnSortButton", async () => {
  await waiters.waitAndClick(this.SortPriceButton);
});
}

async ClickOnCameras2Button(): Promise<void> {
  await Functions.allureStep ("ClickOnCameras2Button", async () => {
  await waiters.waitAndClick(this.CameraButton2);
});
}

async ClickOnSort2Button(): Promise<void> {
  await Functions.allureStep ("ClickOnSort2Button", async () => {
  await waiters.waitAndClick(this.SortPriceButton2);
});
}

  }
  
  export const MarketPage = new MarketPageObject();
