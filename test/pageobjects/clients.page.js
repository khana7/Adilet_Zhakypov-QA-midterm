const Page = require('./page');

class ClientsPage extends Page {
  get addClientButton() {
    return $('button.clients-add-user-dialog');
  }

  get addClientModal() {
    return $('div.add-user-modal');
  }

  get surnameInput() {
    return $('input[formcontrolname="userSurname"]');
  }

  get nameInput() {
    return $('input[formcontrolname="userName"]');
  }

  get emailInput() {
    return $('input[formcontrolname="email"]');
  }

  get phoneInput() {
    return $('input[formcontrolname="phone"]');
  }

  get birthInput() {
    return $('input[formcontrolname="birthday"]');
  }

  get genderRadioButton() {
    return $('mat-radio-button[id="mat-radio-2"]');
  }

  get saveButton() {
    return $('button[name="save"]');
  }

  get closeButton() {
    return $('div.add-user-modal__close');
  }

  async clickAddClientButton() {
    await this.addClientButton.click();
    await expect(this.addClientModal).toExist();
  }

  async fillClientForm(surname, name, email, phone, birth, gender) {
    await this.surnameInput.setValue(surname);
    await this.nameInput.setValue(name);
    await this.emailInput.setValue(email);
    await this.phoneInput.setValue(phone);
    await this.birthInput.setValue(birth);
    await this.genderRadioButton.click();
  }

  async clickSaveButton() {
    await this.saveButton.click();
    await browser.waitUntil(() => browser.getAlertText(), { timeout: 5000 });
    await browser.dismissAlert();
  }

  async clickCloseButton() {
    await this.closeButton.click();
  }

}

module.exports = new ClientsPage();