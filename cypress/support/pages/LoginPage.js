import BasePage from "./BasePage";

class LoginPage extends BasePage {
    visit() {
        cy.log('Open authorization form');
        cy.visit('/#/login');
    }


    getEmailField() {
        return cy.get('#email');
    }

    setEmailField(mail) {
        this.getEmailField().type(mail);
    }

    getPasswordField() {
        return cy.get('#password');
    }

    setPasswordField(password) {
        this.getPasswordField().type(password)
    }

    getSubmitButton() {
        return cy.get('#loginButton');
    }


    fillLoginFields(username = '', password = '') {
        cy.log('Fill in authorization fields');
        username ? this.getEmailField().type(username) : cy.log('Skip username field');
        password ? this.getPasswordField().type(password) : cy.log('Skip password field');
        this.getSubmitButton().click();
    }

    getErrorMessageText(){
        return cy.get('div [class="error ng-star-inserted"]');
    }

    getEmptyEmailError(){
        this.getEmailField().click();
        cy.get('[class="mat-checkbox-label"]').click();
        return cy.get('mat-error[class="mat-error ng-tns-c119-7 ng-star-inserted"]');
    }

    getEmptyPasswordError(){
        this.getPasswordField().click();
        cy.get('[class="mat-checkbox-label"]').click();
        return cy.get('mat-error[class="mat-error ng-tns-c119-8 ng-star-inserted"]');
    }


}

export default new LoginPage()