import BasePage from "./BasePage";

class OrderPage extends BasePage {

    getThankYouText() {
        return cy.get('h1');
    }
    clickPlaceOrderButton() {
         cy.get('span:contains("Place your order and pay")').eq(0).click();
    }

}

export default new OrderPage()