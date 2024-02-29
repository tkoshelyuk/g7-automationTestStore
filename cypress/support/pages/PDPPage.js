import BasePage from "./BasePage";

class PdpPage extends BasePage {

    addProductToCart() {
        cy.get('.productpagecart').click();
    }


}

export default new PdpPage()