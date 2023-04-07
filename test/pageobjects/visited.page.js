const Page = require('./page');

class Visited extends Page {
  get searchForm() { return $('.search-form.user-search-form.with-options'); }
  get spentVisitedFilter() { return $('app-client-total-visited-got-filter'); }
  get option5001() { return $('/html/body/app-root/app-clients/header/aside/div[1]/app-client-total-visited-got-filter/div/div[2]/div[6]'); }

  

  async performVisitedFilter() {
    await this.searchForm.click();
    await this.spentVisitedFilter.waitForDisplayed({ timeout: 5000 });
    await this.spentVisitedFilter.click();
    await this.option5001.waitForDisplayed({ timeout: 5000 });
    await this.option5001.click();
    await browser.pause(10000);
  }
}

module.exports = new Visited();