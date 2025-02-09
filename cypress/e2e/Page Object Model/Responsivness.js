export class Responsive{
    MobileScreen(){
        cy.viewport(320,480);
        cy.get('[class="chakra-ui-light"]').should('be.visible');
        cy.get('#landing_page_navbar').should('have.css','margin-top');
    }
    TabletScreen(){
        cy.viewport(768, 1024);
        cy.get('[class="chakra-ui-light"]').should('be.visible');
    }
    DesktopScreen(){
        cy.viewport(1920, 1080);
        cy.get('[class="chakra-ui-light"]').should('be.visible');
    }
}