import { Page } from "@playwright/test";
import { BasePage } from "./basePage";

export class SearchPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  readonly searchInput = this.page.getByRole("search").getByRole("combobox");
  readonly searchResults = this.page.locator("#search cite");

  public async search(pattern: string) {
    await this.searchInput.fill(pattern);
    await this.searchInput.press("Enter");
  }

  public getNthResult(nth: number) {
    return this.searchResults.nth(nth);
  }
}