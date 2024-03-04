import user from '../fixtures/user.json'
import loginPage from "../support/pages/LoginPage";
import commonMethods from "../support/pages/CommonMethods";
import registrationPage from "../support/pages/RegistrationPage";
import mainPage from "../support/pages/MainPage";


describe('Authorization positive scenarios', () => {
    it('Authorization', () => {
        cy.log('Create new user');
        registrationPage.createNewUser(user.email);

        cy.log('Login with created user');
        loginPage.visit();
        loginPage.fillLoginFields(user.email, user.password);

        cy.log('Verify user is on main page');
        mainPage.getPageTitle().should('contain', "All Products");
    })
})

describe('Authorization negative scenarios', () => {

    it('Authorization without entered email', () => {
        loginPage.visit();
        commonMethods.closeBanner();

        cy.log('Verify email error and Submit button is disabled');
        loginPage.setPasswordField('pass');
        loginPage.getEmptyEmailError().should('contain', 'Please provide an email address.');
        loginPage.getSubmitButton().should('be.disabled');
    })

    it('Authorization without entered password', () => {
        loginPage.visit();
        commonMethods.closeBanner();

        cy.log('Verify password error and Submit button is disabled');
        loginPage.setEmailField(user.email);
        loginPage.getEmptyPasswordError().should('contain', 'Please provide a password.');
        loginPage.getSubmitButton().should('be.disabled');
    })

    it('Authorization with wrong credentials', () => {
        loginPage.visit();
        commonMethods.closeBanner();

        cy.log('Login with correct email and wrong password');
        loginPage.fillLoginFields(user.email,'any');

        cy.log('Verify wrong credentials error');
        loginPage.getErrorMessageText().should('contain', 'Invalid email or password.');
    })
})
