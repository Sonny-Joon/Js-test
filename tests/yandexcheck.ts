import { browser, by, element, protractor } from "protractor";

describe('Yandex1', () => {
    it('Change geolink and check content', async () => {
        // Создаем объект для работы с ожиданиями
      const EC = protractor.ExpectedConditions;
        // открываем страницу яндекса
      await browser.get('https:///yandex.by/');
        // создаем элемент по css = 
      const GeolinkButton = element(by.css(".geolink__reg"));
        // ждем появление этого элемента (события presenceOf)
      await browser.wait(EC.presenceOf(GeolinkButton), 10000);
        // кликаем по кнопке локации
      await GeolinkButton.click();
        // создаем элемент по css =  поле ввода города
      let InputField = element(by.css("#city__front-input"));
        // ждем появление этого элемента (события presenceOf)
      await browser.wait(EC.presenceOf(InputField), 5000);
       // очищаем
      await InputField.clear();
       // пишем в элемент текст “Лондон”
      await InputField.sendKeys("Лондон");
        // создаем элемент пункта списка
      let SelectButton = element(by.css(".b-autocomplete-item__reg"));        
        // ждем
      await browser.wait(EC.presenceOf(SelectButton), 10000);
        // кликаем по 1 первой позиции в списке
      await SelectButton.click();        
        // создаем элемент кнопки "ещё" по css
      let MoreButton = element(by.css("[data-statlog='services_new.more']"));
        // ждем
      await browser.wait(EC.presenceOf(MoreButton), 10000);
        // кликаем по кнопке "ещё"
      await MoreButton.click();
        // типа получаем содержимое поп-апа "ещё"
      let ContentLon = element.all(by.css(".services-new__more-popup-content"));
        // кликаем по кнопке локации
      await GeolinkButton.click();        
        // ждем появление этого элемента (события presenceOf)
      await browser.wait(EC.presenceOf(InputField), 5000);
        // очищаем
      await InputField.clear();
        // пишем в элемент текст “Париж”
      await InputField.sendKeys("Париж");
        // ждем
      await browser.wait(EC.presenceOf(SelectButton), 10000);
        // кликаем по 1 позиции из списка
      await SelectButton.click();
        // ждем появления кнопки "ещё"
      await browser.wait(EC.presenceOf(MoreButton), 10000);
        // кликаем по кнопке "ещё"
      await MoreButton.click();
        // получаем содержимое кнопки "ещё"
      let СontentParis = element.all(by.css(".services-new__more-popup-content"));
        //типа сравниваем 2 содержимых
      expect(СontentParis.getText()).toEqual(ContentLon.getText()); 
      })
      //закрываем на всякий случай, хотя итак закроется
      afterAll (() =>      {
      browser.close
       })
         });
