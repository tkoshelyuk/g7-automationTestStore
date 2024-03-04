import BasePage from "./BasePage";
import user from "../../fixtures/user.json";

class AddressPage extends BasePage {


    addNewAddressButtonClick() {
        cy.get('span:contains("Add New Address")').eq(0).click();

    }

    setCountryField() {
        return cy.get('[data-placeholder="Please provide a country."]').type(user.country);
    }

    setNameField() {
        return cy.get('[data-placeholder="Please provide a name."]').type(user.firstname);
    }

    setMobileField() {
        return cy.get('[data-placeholder="Please provide a mobile number."]').type(user.telephone);
    }

    setZipField() {
        return cy.get('[data-placeholder="Please provide a ZIP code."]').type(user.zipcode);
    }

    setAddressField() {
        return cy.get('[placeholder="Please provide an address."]').type(user.address);
    }

    setCityField() {
        return cy.get('[data-placeholder="Please provide a city."]').type(user.city);
    }

    setStateField() {
        return cy.get('[data-placeholder="Please provide a state."]').type(user.state);
    }

    submitAddressForm(){
        cy.get('span:contains("Submit")').click();
    }

    addNewAddress(userName){
        this.setCountryField();
        this.setNameField(userName);
        this.setMobileField();
        this.setZipField();
        this.setAddressField();
        this.setCityField();
        this.setStateField();
        this.submitAddressForm();
    }

    getDataFromAddress(){
        return cy.get('mat-row[role=\'row\']:last');
    }

}

export default new AddressPage()