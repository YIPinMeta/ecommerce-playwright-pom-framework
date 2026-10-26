const {test, expect} = require('@playwright/test'); // Import the test and expect functions from Playwright
const {HomePage} = require('../pages/HomePage'); // Import the HomePage class from the pages directory

test( '@sanity TC01_LaunchApplication', async ({page}) => 
    {
const home = new HomePage(page);
await home.goto();

await expect(page).toHaveTitle("Your store of fun");
    });