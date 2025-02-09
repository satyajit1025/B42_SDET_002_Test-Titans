export class ProductPage{
    VisitProduct(){
        cy.contains('Red').should('be.visible').click();
    }
    VisibilityCheck(){
        cy.get('.recommended-flex').should('be.visible');
        cy.get('.card-container').should('be.visible');
    }
    ProductListinCheck(){
        cy.get(".card-container").each((el) => {
            cy.wrap(el).find('.product-rating').should('not.be.empty');
            cy.wrap(el).find('.product-code').should('not.be.empty');
            cy.wrap(el).find('.product-desc-container').should('not.be.empty');
            cy.wrap(el).find('.product-price-1').should('not.be.empty');
          });
    }
    productFilter(){
        cy.contains('Red').should('be.visible').click();
        cy.get('.checkmark').eq(12).click();
        cy.get(".card-container").each((el) => {
            cy.wrap(el).find('.product-country-span').contains('Red').should('be.visible');
        })
    }
}