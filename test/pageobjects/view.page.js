const Page = require('./page');

class ViewPage extends Page {
    get clientRow() {
      return $('table tbody tr:nth-child(1)');
    }
  
    openClientPage() {
      this.clientRow.waitForDisplayed();
      this.clientRow.click();
    }
  }
  
  module.exports = new ViewPage();