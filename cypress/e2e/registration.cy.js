import user from '../fixtures/user.json'
import {faker} from '@faker-js/faker'
import loginPage from "../support/pages/LoginPage";
import registrationPage from "../support/pages/RegistrationPage";
import commonMethods from "../support/pages/CommonMethods";
import mainPage from "../support/pages/MainPage";



user.email = faker.internet.email({ firstName: 'Jeanne', lastName: 'Doe', provider: 'some.fakeMail.qa', allowSpecialCharacters: false });

describe('User registration', () => {
  it('Registration', () => {
    registrationPage.visit();
    commonMethods.closeBanner();

    cy.log('Create new user');
    registrationPage.createNewUser(user.email);
    cy.log('Verify after registration user sees login form')
    registrationPage
        .getLoginButton()
        .should('be.visible');
  })


  it('Authorization', () => {
    loginPage.visit();
    commonMethods.closeBanner();
    cy.log('Login with created user')
    loginPage.fillLoginFields(user.email, user.password);

    cy.log('All products should display on page');
    mainPage.getPageTitle().should('contain', "All Products");
  })


})
