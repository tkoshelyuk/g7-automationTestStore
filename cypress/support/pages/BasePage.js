export default class BasePage {

    constructor() {
        this.dropdown = '.dropdown';
        this.button = '.button';
    }

    getSearchInput() {
        return cy.get('#filter_keyword');
    }

    setSearchParametrInput(searchText){
        return cy.get('#filter_keyword')
            .type(searchText)
            .closest("form");
    }

}

