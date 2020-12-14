"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var protractor_1 = require("protractor");
describe('Search', function () {
    it('Open bbc and find a text', function () { return __awaiter(void 0, void 0, void 0, function () {
        var EC, close_button, search_field, menu_button;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    EC = protractor_1.protractor.ExpectedConditions;
                    // выключаем проверку на AngularJS
                    return [4 /*yield*/, protractor_1.browser.waitForAngularEnabled(false)];
                case 1:
                    // выключаем проверку на AngularJS
                    _a.sent();
                    // открываем страницу BBC
                    return [4 /*yield*/, protractor_1.browser.get('https://www.bbc.com/')];
                case 2:
                    // открываем страницу BBC
                    _a.sent();
                    close_button = protractor_1.element(protractor_1.by.css(".sign_in-exit"));
                    // ждем появление этого элемента (события presenceOf)
                    return [4 /*yield*/, protractor_1.browser.wait(EC.presenceOf(close_button), 10000)];
                case 3:
                    // ждем появление этого элемента (события presenceOf)
                    _a.sent();
                    // кликаем по кнопке закрытия
                    return [4 /*yield*/, close_button.click()];
                case 4:
                    // кликаем по кнопке закрытия
                    _a.sent();
                    search_field = protractor_1.element(protractor_1.by.css("input#orb-search-q"));
                    // ждем появление этого элемента (события presenceOf)
                    return [4 /*yield*/, protractor_1.browser.wait(EC.presenceOf(search_field), 5000)];
                case 5:
                    // ждем появление этого элемента (события presenceOf)
                    _a.sent();
                    //Проверки
                    search_field.isDisplayed().then(function (disp) { console.log("isDisplayed:", disp); });
                    search_field.isEnabled().then(function (enab) { console.log("isEnabled:", enab); });
                    // пишем в элемент текст “sonny_joon”
                    return [4 /*yield*/, search_field.sendKeys("sonny_joon")];
                case 6:
                    // пишем в элемент текст “sonny_joon”
                    _a.sent();
                    menu_button = protractor_1.element(protractor_1.by.css(".orb-nav [class='orb-nav-newsdotcom']"));
                    // ждем
                    return [4 /*yield*/, protractor_1.browser.wait(EC.presenceOf(menu_button), 10000)];
                case 7:
                    // ждем
                    _a.sent();
                    // кликаем по кнопке меню
                    return [4 /*yield*/, menu_button.click()];
                case 8:
                    // кликаем по кнопке меню
                    _a.sent();
                    // дожидаемся загрузки новой страницы
                    return [4 /*yield*/, protractor_1.browser.wait(EC.urlIs('https://www.bbc.com/news'), 5000)];
                case 9:
                    // дожидаемся загрузки новой страницы
                    _a.sent();
                    //закрываем на всякий случай, хотя итак закроется
                    afterAll(function () {
                        protractor_1.browser.close;
                    });
                    return [2 /*return*/];
            }
        });
    }); });
});
