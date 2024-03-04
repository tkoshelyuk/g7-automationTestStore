import BasePage from "./BasePage";

class SelectAddressPage extends BasePage {

    selectAddress(){
         cy.get('[class="mat-radio-container"]:last').click();
}

    clickContinueButton(){
         cy.get('span:contains("Continue")').eq(0).click();
}


}

export default new SelectAddressPage()