import user from '../fixtures/user.json'
import {findProduct} from '../support/helper'
import loginPage from "../support/pages/LoginPage";

describe('Order suite', () => {
    it('Order from homepage', () => {
        loginPage.visit();
        loginPage.fillLoginFields(user.loginname, user.password);

        // this step is not required and was added to obtain a large selection of products
        cy.get('#filter_keyword')
            .type('i')
            .closest("form")
            .submit();

        findProduct('Benefit Bella Bamba');

        cy.get('.productpagecart').click()
        cy.get('#cart_checkout1').click()
        cy.get('#checkout_btn').click()
        cy.get('.contentpanel').should('contain', "Thank you for shopping with us!")
    })
})
