import user from '../fixtures/user.json'
import {findProduct} from '../support/helper'
import loginPage from "../support/pages/LoginPage";

describe('Order suite', () => {
    it('Order from homepage', () => {
        loginPage.visit();
        loginPage.fillLoginFields(user.loginname, user.password);

        findProduct('Benefit Bella Bamba');

        cy.get('.productpagecart').click()
        cy.get('#cart_checkout1').click()
        cy.get('#checkout_btn').click()
        cy.get('.contentpanel').should('contain', "Thank you for shopping with us!")
    })
})
