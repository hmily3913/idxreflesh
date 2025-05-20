// 使用 Puppeteer 定期访问 IDX 项目
const puppeteer = require('puppeteer');
const cookies = require('./cookies.json'); // 登录后导出的 Cookie

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.setCookie(...cookies);
  await page.goto('https://idx.google.com/my-idx-devgit-88262973');
  console.log(await page.title());
  await browser.close();
})();
