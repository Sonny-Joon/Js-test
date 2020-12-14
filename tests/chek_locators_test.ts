import { browser, by, element, protractor } from "protractor";

describe('Yandex1', () => {
    it('Change geolink and check content', async () => {

        // Создаем объект для работы с ожиданиями
        let EC = protractor.ExpectedConditions;

        // выключаем проверку на AngularJS
        await browser.waitForAngularEnabled(false);

        // открываем страницу BBC
        await browser.get('https:///yandex.by/');

                // создаем элемент кнопки меню по css
          let more_button = element(by.css("[data-statlog='services_new.more']"));
        
           // ждем
  await browser.wait(EC.presenceOf(more_button), 10000);

  // кликаем по кнопке меню
  await more_button.click();

  //
  var content_1 = element(by.css(".services-new__more-popup-content"));
content_1.getText().then(cont => { console.log("text:", cont); })
      
  //закрываем на всякий случай, хотя итак закроется
      afterAll (() =>      {
      browser.close
      })

    });
});