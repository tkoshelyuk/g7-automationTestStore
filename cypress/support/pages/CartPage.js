import BasePage from "./BasePage";

class CartPage extends BasePage {

    getBasketTitleFiled(){
        return cy.get('h1');
}

    goToCheckout() {
        cy.get('span:contains("Checkout")').click();
    }

    getProductName(){
        return cy.get('mat-cell[role="cell"]').eq(1);
    }


}

export default new CartPage()