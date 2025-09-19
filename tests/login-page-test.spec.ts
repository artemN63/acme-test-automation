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

    let expectedHomePageFinanceTitle = 'Financial Overview'
    let actualHomePageFinanceTitle = await homePage.homePageFinanceTabTitle.innerText()

    expect(page.url()).toBe(homePage.expectedUrl)
    expect(actualHomePageFinanceTitle).toBe(expectedHomePageFinanceTitle)
})