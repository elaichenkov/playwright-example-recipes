import { chromium } from '@playwright/test';

const GITHUB_URL = 'https://github.com/';

async function globalSetup() {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.goto(`${GITHUB_URL}login`);
  if (!process.env.USERNAME && !process.env.USERNAME) {
    throw new Error(`Username and Password weren't provided. Please, set it as system variables: USERNAME=, PASSWORD=`);
  }
  // Don't forget to replace it with your credentials
  await page.fill('#login_field', process.env.USERNAME);
  await page.fill('#password', process.env.USERNAME);
  await page.click('[value="Sign in"]');

  await page.context().storageState({ path: 'state.json' });
  await page.waitForURL(GITHUB_URL);

  await browser.close();
}

export default globalSetup;
