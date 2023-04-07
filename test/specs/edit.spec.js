const LoginPage = require('../pageobjects/login.page');
const ViewPage = require('../pageobjects/view.page');
const EditPage = require('../pageobjects/edit.page');

describe('Login page', () => {
  before(async () => {
    await LoginPage.open();
  });

  it('should allow a user to log in successfully', async () => {
    await LoginPage.login('Admin', 'Admin@Navi');
  });

  it('view the first client and click checkbox "Не звонить за отзывами"', async () => {
    ViewPage.openClientPage();
    EditPage.clickDontCall();
    await browser.pause(10000);
    
  });


  
});

