import user from '../fixtures/user.json'
import {fillAuthorizationFields} from '../support/helper'

describe('Order suite', () => {
  it('Order from homepage', () => {
    cy.log('Open authorization form');
    cy.visit('/index.php?rt=account/login');

    fillAuthorizationFields(user.loginname, user.password);

    cy.log('User first name should display on page');
    cy.get('.heading1 .subtext').should('contain', user.firstname);
  })
})
