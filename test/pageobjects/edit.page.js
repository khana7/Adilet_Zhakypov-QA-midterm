const Page = require('./page');

class EditPage extends Page {
    
    get checkBox() { return $('/html/body/app-root/app-clients/section/app-client-details/div[2]/div/app-client-contacts/form[2]/div[4]/div[1]/input'); }
    get saveButton() { return $('button[name="save"]'); }
  
    async clickDontCall() {
      this.checkBox.waitForDisplayed({ timeout: 5000 });
      this.checkBox.click();
      this.saveButton.click();
      
    }
  }
  
  module.exports = new EditPage();