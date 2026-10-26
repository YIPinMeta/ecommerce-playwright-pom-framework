1./* Launch Browser (chrome)
	2. Open URL  https://cloudberrystore.services/
	3. Click on Laptops and NoteBooks
	4. Click on Show all Laptops and NoteBooks
	5. Select an item "HP LP3065"
	6. Set Delivery Date
	7. Click on Add to Cart
	9. Go to Checkount
	10. Login
	11. Complete Checkout forms
	12. Submit order
	13. Validate Order COnfirmation
	9. Close WebDriver*/

const {test, expect} = require('@playwright/test');
const { HomePage } = require('../pages/HomePage');
const { CategoryPage } = require('../pages/CategoryPage');
const { ProductPage } = require('../pages/ProductPage');
const {CheckoutPage} = require('../pages/CheckoutPage');
const {LoginPage} = require('../pages/LoginPage');

test('@sanity @regression TC04_CompletePurchase', async ({ page }) => {
  const home = new HomePage(page);
  const category = new CategoryPage(page);
  const product = new ProductPage(page);
  const checkout = new CheckoutPage(page);
  const login = new LoginPage(page);

  await home.goto();
  await home.openAllLaptopsAndNotebooks();
  await category.openProductByName('HP LP3065');

  // Fix: use getDate() (day-of-month) under the hood via helper
  const deliveryDate = ProductPage.buildISODatePlusDays(5);
  await product.setDeliveryDateISO(deliveryDate);

  await product.addToCart();

  await home.goToCheckout();

  await checkout.clickLoginPage();
  await login.login('k.anderson030419@gmail.com', 'Test_123');

  await checkout.selectShippingAddressByIndex(1);
  await checkout.continueShipping();
  await checkout.continuePayment();
  await checkout.confirmOrder();

  await expect(checkout.orderPlacedHeading).toBeVisible();
});