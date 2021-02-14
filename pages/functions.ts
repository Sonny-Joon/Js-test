import { browser, element, by, protractor} from 'protractor';
declare let allure: any;


export class FunctionsObject {

async allureStep(stepDefinition: string, method: any): Promise<void> {
  await allure.createStep(stepDefinition, async () => {
      try {
          await method();
      } catch (error) {
        await   browser.takeScreenshot().then(function (png) {
          allure.createAttachment('Screenshot', function () {
            return new Buffer(png, 'base64')
          }, 'image/png')(); })
          throw error;
      }
  })();
}

async openNewTab (): Promise<void> {
  await this.allureStep ("openNewTab", async () => {
  let handles = await browser.getAllWindowHandles();
  let newWindowHandle = handles[handles.length-1];
          browser.switchTo().window(newWindowHandle)   
        });
  }

  async goBackToPreviousTab(): Promise<void> {
    await this.allureStep ("goBackToPreviousTab", async () => {
    browser.getAllWindowHandles().then((handles) => {
    browser.driver.switchTo().window(handles[1]);
    browser.driver.close();
    browser.driver.switchTo().window(handles[0]);
    });
  });
}

  }
  export const Functions = new FunctionsObject();

