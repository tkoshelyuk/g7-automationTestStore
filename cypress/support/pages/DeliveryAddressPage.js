import BasePage from "./BasePage";

class DeliveryAddressPage extends BasePage {

    selectDelivery(){
        return cy.get('[class="mat-radio-container"]').eq(0).click();
}

    clickContinueButton(){
        return cy.get('span:contains("Continue")').eq(0).click();
}

    getUserName(name){
        //2
        return cy.contains(name);
    }

}

export default new DeliveryAddressPage()