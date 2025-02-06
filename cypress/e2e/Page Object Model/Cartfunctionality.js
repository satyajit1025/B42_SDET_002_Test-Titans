export class CartFunctionality{
    AddProduct(){
        cy.get('.product-cart-button').eq(4).should('be.visible').click()
        cy.get('[fill="currentColor"]').eq(2).click()
        cy.get('.cart-card').should('be.visible')
        cy.contains('Product added to cart').should('be.visible')
        
    }
    RemoveProduct(){
        cy.get('[style="display: flex; justify-content: space-between;"] > :nth-child(2) > .fa-solid').click()
        cy.get('div > .fa-solid').eq(0).click()
    }
    WishlistWithoutLogin(){
        cy.get('#landing_page_combination_cards > :nth-child(1) > .product-top-section > .product-icon > :nth-child(2) > .fa-regular').click()
        cy.contains('Login Required.').should('be.visible')
    }
    WishlistwithLogin(){
        cy.get('#landing_page_combination_cards > :nth-child(1) > .product-top-section > .product-icon > :nth-child(2) > .fa-regular').click({force:true})
        cy.contains('Added to wishlist').should('be.visible')
        cy.get('.landing_page_header_fav').click()
        cy.get('.wishlist-card').should('be.visible')
    }
    CartPrice(){
        this.AddProduct()
        cy.get('.product-cart-button').eq(1).click()
        cy.get('.product-cart-button').eq(2).click()
        cy.get('.product-cart-button').eq(3).click()
        let calculatedTotal = 0;

        cy.get('.cart-card').each(($el) => {
          cy.wrap($el)
            .find('[style="display: flex; justify-content: space-between; flex-wrap: wrap;"] > [style="display: flex; gap: 10px;"] > :nth-child(2)')
            .invoke('text')
            .then((priceText) => {
              const price = parseFloat(priceText.replace('$', ''));

              cy.wrap($el)
                .find('[style="display: flex; gap: 20px;"] > :nth-child(1)')
                .invoke('text')
                .then((qtyText) => {
                  const quantity = parseInt(qtyText, 10);
                  calculatedTotal += price * quantity;
                });
            });
        });
    
        cy.get('.total-cart-value > :nth-child(2) > [style="display: flex; gap: 10px;"] > :nth-child(2)')
          .invoke('text')
          .then((totalText) => {
            const displayedTotal =(totalText.replace('$', '')); 
            var total = Math.floor(calculatedTotal)
            expect(displayedTotal).to.equal(total+'');
          });
    }
}