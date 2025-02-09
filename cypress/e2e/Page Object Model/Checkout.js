export class Checkout{
    ClickCheckout(){
        cy.get('[type="button"]').should('be.visible').click();
        cy.url().should('eq','https://pay-pal-pioneers-068.vercel.app/checkout');
    }
    fillform(fname,lname,number,email){
        cy.get(':nth-child(1) > .chakra-input').eq(0).type(fname);
        cy.get('[class="chakra-input css-ox0j2p"]').eq(1).type(lname);
        cy.get('[type="number"]').type(number);
        cy.get('[type="email"]').type(email);
        cy.get('[type="submit"]').click();
    }
    AdressFill(add,city,dist,state,pin){
        cy.get('[class="chakra-input css-ox0j2p"]').eq(0).type(add);
        cy.get('[class="chakra-input css-ox0j2p"]').eq(1).type(city);
        cy.get('[class="chakra-input css-ox0j2p"]').eq(2).type(dist);
        cy.get('[class="chakra-input css-ox0j2p"]').eq(3).type(state);
        cy.get('[class="chakra-input css-ox0j2p"]').eq(4).type(pin);
        cy.get('[type="submit"]').click();
    }
    Payment(){
        cy.get('[aria-hidden="true"]').eq(20).click();
        cy.get('[type="submit"]').click();
    }
    DetailsView(){
        cy.get('[class="confirm-details"]').should('be.visible');
        cy.contains('Confirm').should('be.visible').click();
    }
    confirm(){
        cy.get('.thankyou-details').should('be.visible');
        cy.contains('Continue shopping').click({force:true});
    }
}