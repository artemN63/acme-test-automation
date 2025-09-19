import {test, expect} from '@playwright/test'
import { LoginPage } from '../pages/login-page'
import { HomePage } from '../pages/home-page'

test.beforeEach(async ({page}) => {
    await page.goto('https://demo.applitools.com/')
})

test('Successful Login validation', async ({page}) => {
    let loginPage = new LoginPage(page)
    let homePage = new HomePage(page)

    await loginPage.login('knopa', 'coolCat777')

    let expectedStateTitle = 'Total Balance'
    let expectedStateBalance = '$350'
    let expectedStatePercentege = '%7'

    await expect(homePage.statementTitle).toHaveText(expectedStateTitle)
    await expect(homePage.statementBalance).toHaveText(expectedStateBalance)
    await expect(homePage.statementPercentage).toHaveText(expectedStatePercentege)
})