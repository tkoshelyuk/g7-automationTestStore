import BasePage from "./BasePage";
import user from "../../fixtures/user.json";

class RegistrationPage extends BasePage {

    visit() {
        cy.log('Open registration form');
        cy.visit('/');
        cy.get('#customer_menu_top').click();
        cy.get('[title=Continue]').click();
    }

    setFirstNameField() {
        return cy.get('#AccountFrm_firstname').type(user.firstname);
    }

    setLastNameField() {
        return cy.get('#AccountFrm_lastname').type(user.lastname);
    }

    setEmailField() {
        return cy.get('#AccountFrm_email').type(user.email);
    }

    setPhoneField() {
        return cy.get('#AccountFrm_telephone').type(user.telephone);
    }

    setFaxField() {
        return cy.get('#AccountFrm_fax').type(user.fax);
    }

    setAddress1Field() {
        return cy.get('#AccountFrm_address_1').type(user.address_1);
    }

    setCityField() {
        return cy.get('#AccountFrm_city').type(user.city);
    }

    setPostCodeField() {
        return cy.get('#AccountFrm_postcode').type(user.postcode);
    }

    setCountryField() {
        return cy.get('#AccountFrm_country_id').select(user.country);
    }

    setZoneField() {
        return cy.get('#AccountFrm_zone_id').select(user.zone_name);
    }

    setLoginField() {
        return cy.get('#AccountFrm_loginname').type(user.loginname);
    }
    setPasswordField() {
        return cy.get('#AccountFrm_password').type(user.password);
    }
    setPasswordConfirmField() {
        return cy.get('#AccountFrm_confirm').type(user.password);
    }

    setPolicyField() {
        return cy.get('#AccountFrm_agree').check();
    }

    getRegistrationMessage(){
        return cy.get('.maintext');
    }


    submitRegistrationForm(){
        cy.get('[title=Continue]').click();
    }

}

export default new RegistrationPage()