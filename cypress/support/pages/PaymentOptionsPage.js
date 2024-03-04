import BasePage from "./BasePage";

class PaymentOptionsPage extends BasePage {

    openNewCartOption(){
        return cy.get('mat-panel-title:contains("Add new card")').eq(0).click();
}

    getNameFiled(){
        return cy.get('input[type="text"]').eq(1);
    }
    getCardNumberFiled(){
        return cy.get('input[type="number"]').eq(0);
    }
    setExpireFiled(){
        cy.get('select').eq(0).select('2');
    }
    setExpireYear(){
        cy.get('select').eq(1).select('2080');
    }

    fillCartData(){
        this.getNameFiled().type('aaa',{force: true});
        this.getCardNumberFiled().type('4111111111111111');
        this.setExpireFiled();
        this.setExpireYear();
    }

    selectSavedCard(){
        return cy.get('[role="row"]:last');
    }
    clickSubmitButton(){
        return cy.get('span:contains("Submit")').click();
}

    clickContinueButton(){
        return cy.get('span:contains("Continue")').eq(0).click();
    }


}

export default new PaymentOptionsPage()