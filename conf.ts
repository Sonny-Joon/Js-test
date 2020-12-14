import { Config } from "protractor";

export const config: Config = {
    seleniumAddress: "http://localhost:4444/wd/hub",
    SELENIUM_PROMISE_MANAGER: false,
    capabilities: {
        browserName: "chrome",
        /*chromeOptions: {
            args: [ "--headless", "--window-size=800,600" ]
        }*/
    },
    specs: [
        "tests/*test.js",
    ]
};