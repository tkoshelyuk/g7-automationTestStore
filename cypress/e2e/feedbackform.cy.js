import feedbackPage from "../support/pages/FeedbackPage";
import commonMethods from "../support/pages/CommonMethods";
import {faker} from '@faker-js/faker';

const comment = faker.lorem.sentence();
const randomNumber = faker.datatype.number({ min: 1, max: 100 });




describe('Feedback positive scenario', () => {
    it('Post Feedback', () => {
        feedbackPage.visit();
        commonMethods.closeBanner();

        cy.log('Set feedback fields and submit form')
        feedbackPage.setCommentField(comment);
        feedbackPage.setCaptchaField();
        feedbackPage.setRating();
        feedbackPage.submitFeedbackForm();

        cy.log('Verify Thank you message')
        feedbackPage.getThanksMessage()
            .then(message => {
                expect(message).to.have.text("Thank you for your feedback.");
            })


    })
})

describe('Feedback negative scenarios', () => {

    it('Post feedback with wrong captcha', () => {
        feedbackPage.visit();
        commonMethods.closeBanner();

        cy.log('Set wrong captcha and submit form')
        feedbackPage.setCommentField(comment);
        cy.log(`${randomNumber}`);
        feedbackPage.setCaptchaField(randomNumber);
        feedbackPage.setRating();
        feedbackPage.submitFeedbackForm();

        cy.log('Verify captcha error message')
        feedbackPage.getErrorMessage()
            .then(message => {
                expect(message).to.have.text("Wrong answer to CAPTCHA. Please try again.");
            })
    })
    it('Try to post feedback with empty comment', () => {
        feedbackPage.visit();
        commonMethods.closeBanner();

        cy.log('Set feedback form and leave comment empty')
        feedbackPage.setCaptchaField();
        feedbackPage.setRating();
        feedbackPage.submitFeedbackForm();

        cy.log('Verify Submit button is disabled')
        feedbackPage.getSubmitButton().should('be.disabled');
    })







})
