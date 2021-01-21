import { browser, element, by, protractor} from 'protractor';

export class FunctionsObject {

  openNewTab = function () {
    browser.getAllWindowHandles().then(function(handles) {
            let newWindowHandle = handles[1]; // this is your new window
            browser.switchTo().window(newWindowHandle)     });
    }

    goBackToPreviousTab = function() {
      browser.getAllWindowHandles().then(function (handles) {
          browser.driver.switchTo().window(handles[1]);
          browser.driver.close();
          browser.driver.switchTo().window(handles[0]);
      });
}

  }
  export const Functions = new FunctionsObject();