import { browser, by, element, protractor } from "protractor";


describe('Yandex1', () => {
    it('Change geolink and check content', async () => {

        // Создаем объект для работы с ожиданиями
        let EC = protractor.ExpectedConditions;

        // выключаем проверку на AngularJS
        await browser.waitForAngularEnabled(false);

        // открываем страницу яндекса
        await browser.get('https:///yandex.by/');
      
// получаем и выводим сведения о погоде (для теста не нужно, идея была в том, чтобы подставлять содержимое для сравнения и получать заведомо неверный результат)
let weather = element.all(by.css(".weather__content"));
weather.getText().then(result => { console.log("Погода:", result); })

        // создаем элемент по css = 
        let geolink_button = element(by.css(".geolink__reg"));
        
         // ждем появление этого элемента (события presenceOf)
      await browser.wait(EC.presenceOf(geolink_button), 10000);

              // кликаем по кнопке локации
              await geolink_button.click();
        
        // создаем элемент по css =  поле ввода города
        let input_field = element(by.css("#city__front-input"));

        // ждем появление этого элемента (события presenceOf)
        await browser.wait(EC.presenceOf(input_field), 5000);

           // очищаем
           await input_field.clear();

        // пишем в элемент текст “Лондон”
        await input_field.sendKeys("Лондон");

        // создаем элемент пункта списка
        let select_button = element(by.css(".b-autocomplete-item__reg"));
        
        // ждем
        await browser.wait(EC.presenceOf(select_button), 10000);

        // кликаем по 1 первой позиции в списке
        await select_button.click();
        
                 // создаем элемент кнопки "ещё" по css
                 let more_button = element(by.css("[data-statlog='services_new.more']"));

           // ждем
  await browser.wait(EC.presenceOf(more_button), 10000);

  // кликаем по кнопке "ещё"
  await more_button.click();

  // типа получаем содержимое поп-апа "ещё"
  let content_1 = element.all(by.css(".services-new__more-popup-content"));
content_1.getText().then(cont => { console.log("Содержимое для Лондона:", cont); })

      // кликаем по кнопке локации
      await geolink_button.click();
        
      // ждем появление этого элемента (события presenceOf)
      await browser.wait(EC.presenceOf(input_field), 5000);

         // очищаем
         await input_field.clear();

      // пишем в элемент текст “Париж”
      await input_field.sendKeys("Париж");
      
      // ждем
      await browser.wait(EC.presenceOf(select_button), 10000);

      // кликаем по 1 позиции из списка
      await select_button.click();

         // ждем появления кнопки "ещё"
await browser.wait(EC.presenceOf(more_button), 10000);

// кликаем по кнопке "ещё"
await more_button.click();

// получаем содержимое кнопки "ещё"
let content_2 = element.all(by.css(".services-new__more-popup-content"));
 await content_2.getText().then(cont2 => { console.log("Содержимое для Парижа:", cont2); 
 
 //типа сравниваем 2 содержимых
         expect(content_2.getText()).toEqual(content_1.getText()); 
         // добавил чисто, чтобы понимать что сравнение вообще выполнялось, а не пропускалось)
         console.log('Конец');
   

        })
        
          //закрываем на всякий случай, хотя итак закроется
              afterAll (() =>      {
              browser.close
              })
        
            });
        });
