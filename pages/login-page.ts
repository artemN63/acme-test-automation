import {Page, Locator} from '@playwright/test'

export class LoginPage {

    usernameInput: Locator
    passwordInput: Locator
    signInButton: Locator
    rememberMeCheckBox: Locator

    expectedUrl: string = 'https://demo.applitools.com/'

    constructor(page: Page) {
        this.usernameInput = page.locator('input[id="username"]')
        this.passwordInput = page.locator('input[id="password"]')
        this.signInButton = page.locator('a[id="log-in"]')
    }

    async login(username: string, password: string): Promise<void> {
        await this.usernameInput.fill(username)
        await this.passwordInput.fill(password)
        await this.signInButton.click()
    }

}