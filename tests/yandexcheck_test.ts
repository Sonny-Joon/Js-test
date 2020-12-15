import { browser, by, element, protractor } from "protractor";

describe('Yandex1', () => {
    it('Change geolink and check content', async () => {

        // Создаем объект для работы с ожиданиями
        let EC = protractor.ExpectedConditions;

        // выключаем проверку на AngularJS
        await browser.waitForAngularEnabled(false);

        // открываем страницу BBC
        await browser.get('https:///yandex.by/');

        // создаем элемент по css = 
        let geolink_button = element(by.css(".geolink__reg"));
        
         // ждем появление этого элемента (события presenceOf)
      await browser.wait(EC.presenceOf(geolink_button), 10000);

              // кликаем по кнопке закрытия
              await geolink_button.click();
        
        // создаем элемент по css = 
        let input_field = element(by.css("#city__front-input"));

        // ждем появление этого элемента (события presenceOf)
        await browser.wait(EC.presenceOf(input_field), 5000);

        /*//Проверки
        search_field.isDisplayed().then(disp => { console.log("isDisplayed:", disp); })
        search_field.isEnabled().then(enab => { console.log("isEnabled:", enab); })
        */
           // очищаем
           await input_field.clear();

        // пишем в элемент текст “Лондон”
        await input_field.sendKeys("Лондон");

        // создаем элемент кнопки меню по css
        let select_button = element(by.css(".b-autocomplete-item__reg"));
        
        // ждем
        await browser.wait(EC.presenceOf(select_button), 10000);

        // кликаем по кнопке меню
        await select_button.click();

          // создаем элемент кнопки меню по css
          let more_button = element(by.css("[data-statlog='services_new.more']"));
        
           // ждем
  await browser.wait(EC.presenceOf(more_button), 10000);

  // кликаем по кнопке меню
  await more_button.click();

  //
  var content_1 = element(by.css(".services-new__more-popup-content"));
content_1.getText().then(cont => { console.log("text:", cont); })

      // кликаем по кнопке закрытия
      await geolink_button.click();
        
      // ждем появление этого элемента (события presenceOf)
      await browser.wait(EC.presenceOf(input_field), 5000);

      /*//Проверки
      search_field.isDisplayed().then(disp => { console.log("isDisplayed:", disp); })
      search_field.isEnabled().then(enab => { console.log("isEnabled:", enab); })
      */
         // очищаем
         await input_field.clear();

      // пишем в элемент текст “Лондон”
      await input_field.sendKeys("Париж");
      
      // ждем
      await browser.wait(EC.presenceOf(select_button), 10000);

      // кликаем по кнопке меню
      await select_button.click();

         // ждем
await browser.wait(EC.presenceOf(more_button), 10000);

// кликаем по кнопке меню
await more_button.click();

//
var content_2 = element(by.css(".services-new__more-popup-content"));

         // ждем
         await browser.wait(EC.presenceOf(content_2), 10000);

         await content_2.getText().then(cont2 => { console.log("text2:", cont2); 
         
          expect(content_2).toEqual(content_1); //not is chained to expect
          console.log('coool');
        })
        
          //закрываем на всякий случай, хотя итак закроется
              afterAll (() =>      {
              browser.close
              })
        
            });
        });
