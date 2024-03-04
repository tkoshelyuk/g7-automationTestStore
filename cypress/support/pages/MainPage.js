import BasePage from "./BasePage";

class MainPage extends BasePage {
    getPageTitle(){
        return cy.get('[class="ng-star-inserted"]');
    }

    openShoppingCart(){
        cy.get('[aria-label="Show the shopping cart"]').click();
    }



}

export default new MainPage()