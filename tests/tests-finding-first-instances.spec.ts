import { test, expect } from "@playwright/test";
import { SearchPage } from "../src/pageObject";
import { rowiURL } from "../src/constants";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test("Test rowi first instance", async ({ page }) => {
  const searchPage = new SearchPage(page);
  await searchPage.search("Rowi");
  await expect(searchPage.getNthResult(0)).toContainText(rowiURL);
});
