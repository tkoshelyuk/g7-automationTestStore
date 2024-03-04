import BasePage from "./BasePage";

class CommonMethods extends BasePage {


    closeBanner(){
        cy.get('[aria-label="Close Welcome Banner"]').click();
    }
}

export default new CommonMethods()