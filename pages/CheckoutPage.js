class CheckoutPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) 
  {
     this.page = page;
     this.loginLink = page.getByRole('link', { name: 'login page' });
     this.addressDropdown = page.locator('#input-shipping-address');
     this.shippingChooseBtn= page.locator('#button-shipping-methods');
     this.shippingChooseCtn= page.getByRole('button', { name: 'Continue' });
     this.paymentChooseBtn = page.locator('#button-payment-methods');
     this.paymentChooseCtn = page.getByRole('button', { name: 'Continue' });
     this.Confirmbtn = page.getByRole('button', { name: 'Confirm Order' });
    }

    async ClickLoginPage(){
        await this.loginLink.click();
    }
    async selectShippingAddressByIndex(index)
    {
    await this.addressDropdown.selectOption({ index: index });
    }
    async ContinueShipping()
    {
    await this.shippingChooseBtn.click();
    await this.shippingChooseCtn.click();
    }
    async ContinuePayment()
    {
      await this.paymentChooseBtn.click();
      await this.paymentChooseCtn.click();
    }
    async ConfirmOrder()
    
    {
        await this.Confirmbtn.click();
    }
    async isOrderPlacedVisible() 
    {
    return await this.orderPlacedHeading.isVisible();
  }
}
module.exports = { CheckoutPage };