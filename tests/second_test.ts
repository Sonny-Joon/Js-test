import { browser, by, element, protractor } from "protractor";

describe('Search', () => {
    it('Open bbc and find a text', async () => {

        // Создаем объект для работы с ожиданиями
        let EC = protractor.ExpectedConditions;

        // выключаем проверку на AngularJS
        await browser.waitForAngularEnabled(false);

        // открываем страницу BBC
        await browser.get('https://www.bbc.com/');

        // создаем элемент по css = закрытия всплыв. окна
        let close_button = element(by.css(".sign_in-exit"));
        
         // ждем появление этого элемента (события presenceOf)
      await browser.wait(EC.presenceOf(close_button), 10000);

              // кликаем по кнопке закрытия
              await close_button.click();
        
        // создаем элемент по css = поле ввода поиска
        let search_field = element(by.css("input#orb-search-q"));

        // ждем появление этого элемента (события presenceOf)
        await browser.wait(EC.presenceOf(search_field), 5000);

        //Проверки
        search_field.isDisplayed().then(disp => { console.log("isDisplayed:", disp); })
        search_field.isEnabled().then(enab => { console.log("isEnabled:", enab); })

        // пишем в элемент текст “sonny_joon”
        await search_field.sendKeys("sonny_joon");

        // создаем элемент кнопки меню по css
        let menu_button = element(by.css(".orb-nav [class='orb-nav-newsdotcom']"));
        
        // ждем
        await browser.wait(EC.presenceOf(menu_button), 10000);

        // кликаем по кнопке меню
        await menu_button.click();

      // дожидаемся загрузки новой страницы
      await browser.wait(EC.urlIs ('https://www.bbc.com/news'), 5000);
      
  //закрываем на всякий случай, хотя итак закроется
      afterAll (() =>      {
      browser.close
      })

    });
});