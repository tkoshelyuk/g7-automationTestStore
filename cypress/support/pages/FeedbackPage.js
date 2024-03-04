import BasePage from "./BasePage";
import user from "../../fixtures/user.json";

class FeedbackPage extends BasePage {

    visit() {
        cy.log('Open feedback form');
        cy.visit('/#/contact');
    }


    setCommentField(comment) {
        return cy.get('#comment').type(comment);
    }

    evaluateMathExpression(expression) {
        return eval(expression);
    }

    setCaptchaField(number){
       if(number!==undefined){
           cy.get('#captchaControl').type(number);

       }else{
           cy.get('code[id="captcha"]')
               .invoke('text')
               .then(text => {
                   cy.wrap(this.evaluateMathExpression(text)).then((result) => {
                       cy.get('#captchaControl').type(result);
                   });

               });
       }

    }

    setRating(){
        cy.get('#rating')
            .invoke('val', '2★')
            .trigger('valueChange');
    }

    submitFeedbackForm(){
        cy.get('span:contains("Submit")',{wait:3000}).click();
    }
    getThanksMessage(){
        return cy.get('div[aria-hidden="true"] span').eq(0);
    }

    getErrorMessage(){
        return cy.get('[class="mat-simple-snack-bar-content"]').eq(1);
    }

    getSubmitButton(){
        return cy.get('button[disabled="true"]');
    }


}

export default new FeedbackPage()