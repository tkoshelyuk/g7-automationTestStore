import user from '../fixtures/user.json'
import {findProduct} from '../support/helper'
import loginPage from "../support/pages/LoginPage";
import commonMethods from "../support/pages/CommonMethods";
import orderPage from "../support/pages/OrderPage";
import addressPage from "../support/pages/AddressPage";
import selectAddressPage from "../support/pages/SelectAddressPage";
import deliveryAddressPage from "../support/pages/DeliveryAddressPage";
import paymentOptionsPage from "../support/pages/PaymentOptionsPage";
import mainPage from "../support/pages/MainPage";
import cartPage from "../support/pages/CartPage";
import {faker} from '@faker-js/faker'

user.firstname = faker.person.firstName();

describe('Order suite', () => {
    it.only('Order from homepage', () => {
        loginPage.visit();
        commonMethods.closeBanner();
        cy.log('User login')
        loginPage.fillLoginFields(user.email, user.password);

        cy.log('Search for required product and open it in Cart')
        findProduct('Carrot Juice');

        cy.log('Open cart and check added before product is in cart')
        mainPage.openShoppingCart();
        cartPage.getBasketTitleFiled().should('contain', 'Your Basket');
        cartPage.getProductName().should('contain','Carrot Juice');

        cy.log('Proceed to Checkout')
        cartPage.goToCheckout();

        cy.log('Add new address')
        addressPage.addNewAddressButtonClick();
        addressPage.addNewAddress(user.firstname);
        cy.log('Verify address is added')
        addressPage.getDataFromAddress().should('contain',user.firstname);

        cy.log('Select address and go to Delivery page')
        selectAddressPage.selectAddress();
        selectAddressPage.clickContinueButton();

        cy.log('Check address with correct user name is selected')
        deliveryAddressPage.getUserName(user.firstname).should('contain',user.firstname);
        cy.log('Select delivery option and click Continue')
        deliveryAddressPage.selectDelivery();
        deliveryAddressPage.clickContinueButton();

        cy.log('Select card as payment option, fill card data and save card')
        paymentOptionsPage.openNewCartOption();
        paymentOptionsPage.fillCartData();
        paymentOptionsPage.clickSubmitButton();

        cy.log('Verify card is added and go to Place Order page')
        paymentOptionsPage.selectSavedCard().should('contain','111')
        paymentOptionsPage.clickContinueButton();

        cy.log('Place order and verify Thank you text')
        orderPage.clickPlaceOrderButton();
        orderPage.getThankYouText().should('contain', "Thank you for your purchase!");
    })
})
