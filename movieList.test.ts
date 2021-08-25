import { Builder, Capabilities, By } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://127.0.0.1:5500/movieList/index.html')
})

afterAll(async () => {
    await driver.quit()
})

test ('Inputting in a movie', async () => {
    let inputField = await driver.findElement(By.name('input'))
    let addButton = await driver.findElement(By.name('button'))


    await inputField.sendKeys('The Prestige')
    addButton.click();

    await driver.sleep(3000)
})
