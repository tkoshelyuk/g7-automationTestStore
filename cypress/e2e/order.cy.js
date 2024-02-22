import user from '../fixtures/user.json'
import {findProduct} from '../support/helper'
import loginPage from "../support/pages/LoginPage";
import commonMethods from "../support/pages/CommonMethods";
import pDPPage from "../support/pages/PDPPage";
import shoppingCartPage from "../support/pages/ShoppingCartPage";
import checkoutPage from "../support/pages/CheckoutPage";
import orderPage from "../support/pages/OrderPage";

describe('Order suite', () => {
    it('Order from homepage', () => {
        loginPage.visit();
        loginPage.fillLoginFields(user.loginname, user.password);

        //search for required product and open it in Cart
        commonMethods.setSearchParametrInput('i').submit();
        findProduct('Benefit Bella Bamba');

        pDPPage.addProductToCart();
        shoppingCartPage.goToCheckout();
        checkoutPage.submitOrder();
        orderPage.getThankYouText().should('contain', "Thank you for shopping with us!");
    })
})
