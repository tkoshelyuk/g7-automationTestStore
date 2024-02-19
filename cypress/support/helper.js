export function findProduct(productName) {
    // this step is not required and was added to obtain a large selection of products
    cy.get('#filter_keyword')
        .type('i')
        .closest("form")
        .submit();

    cy.get('body').then((body) => {
        if (body.find(`[title="${productName}"]`).length > 0) {
            cy.get(`[title="${productName}"]`).click();
        } else {
            cy.get('.pagination li a').contains('>').click();
            findProduct(productName);
        }
    })
}

// export function findProduct(productName) {
//     cy.get('#filter_keyword').type('i').closest('form').submit();
//
//     cy.get('ul.pagination a').then(pages => {
//         return pages.length
//     }).then(pageCount => {
//         for (let i = 0; i < pageCount; i++) {
//             cy.location().then(location => {
//                 if (!location.search.includes('product/product')) {
//                     cy.get('body').then(body => {
//                         if (body.find(`.prdocutname[title="${productName}"]`).length > 0) {
//                             cy.get(`.prdocutname[title="${productName}"]`).click();
//                         } else {
//                             cy.get('ul.pagination a').contains('>').click()
//                         }
//                     })
//                 }
//             })
//         }
//     })
// }