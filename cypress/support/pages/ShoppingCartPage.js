import BasePage from "./BasePage";

class ShoppingCartPage extends BasePage {

    goToCheckout() {
        cy.get('#cart_checkout1').click();
    }


}

export default new ShoppingCartPage()