import {Page, Locator} from '@playwright/test'

export class HomePage {

    homePageFinanceTabTitle: Locator
    addAccountButton: Locator
    makePaymentButton: Locator

    expectedUrl: string = 'https://demo.applitools.com/app.html'

    constructor(page: Page) {
        this.homePageFinanceTabTitle = page.locator('div[class="element-wrapper compact pt-4"] h6[class="element-header"]')
        this.addAccountButton = page.locator('a[class="btn btn-primary btn-sm"]')
        this.makePaymentButton = page.locator('a[class="btn btn-success btn-sm"]')
    }

}