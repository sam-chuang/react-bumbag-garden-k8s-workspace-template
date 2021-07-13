import { chromium } from "playwright"
import { expect } from "chai"

let page
let context
let browser

describe("Index page", () => {
  before(async () => {
    browser = await chromium.launch({ headless: false })
    context = await browser.newContext({})
  })

  beforeEach(async () => {
    page = await context.newPage()

    await page.goto(`http://webapp.localhost`, {
      waitUntil: "networkidle0"
    })
  })

  afterEach(async () => {
    await page.close()
  })

  after(async () => {
    await browser.close()
  })

  it("should say hi", async () => {
    await page.waitForSelector("h1")
    const title = await page.$eval("h1", (heading) => heading.textContent)

    expect(title).to.equal("Hi")
  })
})
