import BasePage from "./BasePage";

class CheckoutPage extends BasePage {

    submitOrder() {
        cy.get('#checkout_btn').click();
    }


}

export default new CheckoutPage()