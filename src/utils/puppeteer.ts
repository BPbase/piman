import puppeteer from 'puppeteer';

export default async function (html: string) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setContent(html);
  await page.screenshot({ path: 'screenshot.png' });
  await browser.close();
}