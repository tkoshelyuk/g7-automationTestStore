export function findProduct(productName) {
          cy.get(`div[class="item-name"]:contains("${productName}")`)
                .closest('[class="mat-grid-tile-content"]')
                .find('button[aria-label="Add to Basket"]')
                .click();



}

