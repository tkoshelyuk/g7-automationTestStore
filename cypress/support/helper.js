export function fillAuthorizationFields(username = '', password = ''){
    cy.log('Fill in authorization fields');
    username ? cy.get('#loginFrm_loginname').type(username) : cy.log('username field not filled');
    password ? cy.get('#loginFrm_password').type(password) : cy.log('password field not filled');
    cy.get('[title="Login"]').click();
}

export function findProduct(productName){
    cy.get('div[class="thumbnails grid row list-inline"]')
        .then((container) => {
            const productSelector = `a[class="prdocutname"]:contains(${productName})`;

            if(container.find(productSelector).length > 0) {
                cy.get(productSelector).eq(0).click();
                cy.get('span[class="bgnone"]').should('contain',productName);
            } else {
                cy.get('ul[class="pagination"] li a').contains('>').click();
                findProduct(productName);
            }
        });
}

