//Constructor
class HomePage{

constructor(page)
{
this.page = page;

//locators
// Header / top navigation
this.myAccountIcon = page.locator('.fa-solid.fa-user');
this.laptopsAndNotebooksMenu = page.getByRole('link', { name: 'Laptops & Notebooks', exact: true });
this.showAllLaptopsAndNotebooks = page.getByRole('link', { name: 'Show All Laptops & Notebooks' });
this.checkoutLink = page.getByRole('link', { name: ' Checkout' });

 // My Account dropdown
this.loginLink = page.getByRole('link', { name: 'Login' });

}
//methods/actions
 async goto() {
    await this.page.goto('https://cloudberrystore.services/');
  }

  async openMyAccount() {
    await this.myAccountIcon.click();
  }

  async clickLogin() {
    await this.loginLink.click();
  }

  async openAllLaptopsAndNotebooks() {
    await this.laptopsAndNotebooksMenu.click();
    await this.showAllLaptopsAndNotebooks.click();
  }

  async goToCheckout() {
    await this.checkoutLink.click();
  }

}

module.exports = { HomePage}; //makes the class available to other files