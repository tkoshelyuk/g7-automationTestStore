import BasePage from "./BasePage";

class OrderPage extends BasePage {

    getThankYouText() {
        return cy.get('.contentpanel');
    }

}

export default new OrderPage()