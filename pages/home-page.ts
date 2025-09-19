import {Page, Locator} from '@playwright/test'

export class HomePage {

    homePageFinanceTabTitle: Locator
    statementTitle: Locator
    statementBalance: Locator
    statementPercentage: Locator

    addAccountButton: Locator
    makePaymentButton: Locator

    expectedUrl: string = 'https://demo.applitools.com/app.html'

    constructor(page: Page) {
        this.homePageFinanceTabTitle = page.locator('div[class="element-wrapper compact pt-4"] h6[class="element-header"]')
        this.statementTitle = page.locator('div[class="balance hidden-mobile"] div[class="balance-title"]')
        this.statementBalance = page.locator('div[class="balance hidden-mobile"] div[class="balance-value"] span').nth(0)
        this.statementPercentage = page.locator
        ('div[class="balance hidden-mobile"] div[class="balance-value"] span[class="trending trending-down-basic"] span')

        this.addAccountButton = page.locator('a[class="btn btn-primary btn-sm"]')
        this.makePaymentButton = page.locator('a[class="btn btn-success btn-sm"]')
    }

}