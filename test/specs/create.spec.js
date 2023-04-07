const LoginPage = require('../pageobjects/login.page');
const ClientsPage = require('../pageobjects/clients.page');

describe('Login page', () => {
  before(async () => {
    LoginPage.open();
  });

  it('should allow a user to log in successfully', async () => {
    await LoginPage.login('Admin', 'Admin@Navi');
  });

  it('should add a new client and select it', async () => {
    await ClientsPage.clickAddClientButton();
    await ClientsPage.fillClientForm('smith', 'john', 'johnsmith@gmail.com', '200500600', '3/24/2023', 'male');
    await ClientsPage.clickSaveButton();
    await ClientsPage.clickCloseButton();
    await browser.pause(10000);
  });

  
});