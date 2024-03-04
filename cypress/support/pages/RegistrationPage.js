import BasePage from "./BasePage";
import user from "../../fixtures/user.json";

class RegistrationPage extends BasePage {
    visit() {
        cy.log('Open registration form');
        cy.visit('/#/register');
    }

    setEmailField(mail) {
        return cy.get('#emailControl').type(mail,{force: true});
    }
    setPasswordField() {
        return cy.get('#passwordControl').type(user.password,{force: true});
    }
    setRepeatPasswordField() {
        return cy.get('#repeatPasswordControl').type(user.repeatPassword,{force: true});
    }
    setQuestionField() {
        cy.get('[aria-label="Selection list for the security question"]').click({force: true});
        return cy.get('[class="mat-option-text"]:contains("Maternal grandmother\'s first name?")').click({force: true});
    }

    setAnswerField() {
        return cy.get('#securityAnswerControl').type(user.answer,{force: true});
    }

    submitRegistrationForm(){
        cy.get('#registerButton').click({force: true});
    }

    getLoginButton(){
        return cy.get('#loginButton');
    }

   createNewUser(mail){
        this.visit();
        //this.closeBanner();
        this.setEmailField(mail);
        this.setPasswordField();
        this.setRepeatPasswordField();
        this.setQuestionField();
        this.setAnswerField();
        this.submitRegistrationForm();
    }

}

export default new RegistrationPage()