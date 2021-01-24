import {browser, ElementFinder, protractor} from 'protractor';
import {DEFAULT_TIMEOUT} from './constants';


export async function waitForElementVisible(elementFinder: ElementFinder, timeout: number = DEFAULT_TIMEOUT): Promise<void> {
	const EC = protractor.ExpectedConditions;
	await browser.wait(EC.visibilityOf(elementFinder), timeout);
}
