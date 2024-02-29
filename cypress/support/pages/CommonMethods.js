import BasePage from "./BasePage";

class CommonMethods extends BasePage {

    setSearchParametrInput(searchText){
        return cy.get('#filter_keyword')
            .type(searchText)
            .closest("form");
    }
}

export default new CommonMethods()