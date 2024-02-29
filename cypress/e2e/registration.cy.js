import user from '../fixtures/user.json'
import {faker} from '@faker-js/faker'
import RegistrationPage from "../support/pages/RegistrationPage";
import loginPage from "../support/pages/LoginPage";
import accountPage from "../support/pages/AccountPage";

user.firstname = faker.person.firstName();
user.lastname = faker.person.lastName();
user.email = faker.internet.email({ firstName: 'Jeanne', lastName: 'Doe', provider: 'some.fakeMail.qa', allowSpecialCharacters: false });
user.loginname = faker.internet.userName();

describe('register with valid data', () => {
  it('Registration', () => {
    RegistrationPage.visit();

    cy.log('Fill in the fields Personal Details fields');

    RegistrationPage.setFirstNameField();
    RegistrationPage.setLastNameField();
    RegistrationPage.setEmailField();
    RegistrationPage.setPhoneField();
    RegistrationPage.setFaxField();

    cy.log('Fill in the Your Address fields');
    RegistrationPage.setAddress1Field();
    RegistrationPage.setCityField();
    RegistrationPage.setPostCodeField();
    RegistrationPage.setCountryField();
    RegistrationPage.setZoneField();

    cy.log('Fill in the Login Details fields');
    RegistrationPage.setLoginField();
    RegistrationPage.setPasswordField();
    RegistrationPage.setPasswordConfirmField();
    RegistrationPage.setPolicyField();


    cy.log('Submit form and check results');
    RegistrationPage.submitRegistrationForm();
    RegistrationPage
        .getRegistrationMessage()
        .should('have.prop', 'textContent', ' Your Account Has Been Created!');
  })


  it('Authorization', () => {
    loginPage.visit();
    loginPage.fillLoginFields(user.loginname, user.password);

    cy.log('User first name should display on page');
    accountPage.getFirstNameText().should('contain', user.firstname);
  })


})
