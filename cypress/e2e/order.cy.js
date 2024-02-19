import user from '../fixtures/user.json'
import {fillAuthorizationFields} from '../support/helper'
import {findProduct} from "../support/helper";

describe('Order suite', () => {
  it('Order from homepage', () => {
    cy.log('Open authorization form');
    cy.visit('/index.php?rt=account/login');

    fillAuthorizationFields(user.loginname, user.password);

    cy.log('User first name should display on page');
    cy.get('.heading1 .subtext').should('contain', user.firstname);

    //search for "E"
    cy.get('#filter_keyword').type('E{enter}');


    findProduct(user.product);


    //add to cart
    cy.get('ul[class="productpagecart"] li a').click();

    //check cart
    cy.get(`a:contains(${user.product})`).eq(1).should('be.visible');

    //checkout
    cy.get('#cart_checkout1').click();
    cy
        .get('table[class="table confirm_products"] td')
        .eq(1)
        .should('contain',user.product);

    //place order
    cy.get('#checkout_btn').click();
    cy.get('section[class="mb40"] p').eq(1).should('contain', 'has been created!');


  })
})
