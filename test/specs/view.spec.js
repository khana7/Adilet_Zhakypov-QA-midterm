const ViewPage = require('../pageobjects/view.page');
const LoginPage = require('../pageobjects/login.page');

describe('Login page', () => {
  before(async () => {
    await LoginPage.open();
  });


  it('should allow a user to log in successfully', async () => {
    await LoginPage.login('Admin', 'Admin@Navi');
  });


  it('should open client page', async () => {
    await ViewPage.openClientPage();
    await browser.pause(10000);
  });

  

  
});

