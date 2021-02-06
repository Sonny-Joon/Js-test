import { browser, element, by, protractor} from 'protractor';
const EC = protractor.ExpectedConditions;
import {waiters} from '../utils/waiters';
import { Functions } from "./functions";

export class MarketPageObject {

    SearchField = element(by.css('[id="header-search"]'));
    SearchButton = element(by.css('[type="submit"]'));
    AddToCompareButton = element.all(by.css('._1CXljk9rtd'));
    CompareButton = element(by.css('._3oDLePObQ1'));
    ProductName = element.all(by.css('._3dCGE8Y9v3[1]'));
    ProductInCompareName = element.all(by.css('.PzFNvA3yUm'));


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
      
    async getProductName(number: number): Promise <string> {
      const elementName = this.ProductName.get(number);
      await Functions.allureStep ("getProductName", async () => {
        await browser.wait(EC.presenceOf(elementName), 10000);
        console.log ("имя:",elementName.getText());
    });
      return elementName.getText();
    }

        async getProductInCompareName(number: number): Promise <string> {
      const elementCompareName = this.ProductInCompareName.get(number);
      await Functions.allureStep ("getProductInCompareName", async () => {
        await browser.wait(EC.presenceOf(elementCompareName), 10000);
    });
      return this.ProductInCompareName.getText();
    }


  }
  
  export const MarketPage = new MarketPageObject();
