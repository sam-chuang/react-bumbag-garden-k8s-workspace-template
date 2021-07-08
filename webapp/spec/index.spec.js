import { chromium } from "playwright";
import { expect } from "chai";

let page;
let browser;

describe("Index page", () => {
  before(async () => {
    browser = await chromium.launch({ headless: false });
    page = await browser.newPage();

    //TODO: repor url?
    await page.goto("https://e2e-boilerplate.github.io/sandbox/", {
      waitUntil: "networkidle0",
    });
  });

  after(() => {
    if (!page.isClosed()) {
      browser.close();
    }
  });

  it("should say hi", async () => {
    await page.waitForSelector("h1");
    const title = await page.$eval("h1", (el) => el.textContent);

    expect(await page.title()).to.equal("Hi");
    expect(title).to.equal("Hi");
  });
});
