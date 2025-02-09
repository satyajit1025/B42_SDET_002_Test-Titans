export class Formsubmission{
    SignupData(name,email,pass){
        cy.contains('Sign Up').click({force:true});
        cy.get('[placeholder="Name"]').should('be.visible').type(name);
        cy.get('[placeholder="Email"]').should('be.visible').type(email);
        cy.get('[placeholder="Password"]').should('be.visible').type(pass);
        cy.get('[name="role"]').should('be.visible').select('User');
        cy.get('[type="submit"]').should('be.visible').click();
    }
    ValidSignup(name,email,pass){
        this.SignupData(name,email,pass);
        cy.contains('Registration successful').should('be.visible');
    }
    DupicateSignup(name,email,pass){
        this.SignupData(name,email,pass);
        cy.contains('Registration failed').should('be.visible');
    }
    LoginData(id,pass){
        cy.contains('Log In').click({force:true});
        cy.get('[placeholder="Email"]').should('be.visible').type(id);
        cy.get('[placeholder="Password"]').should('be.visible').type(pass);
        cy.get('[type="submit"]').should('be.visible').click();
    }
    ValidLogin(id,pass){
        this.LoginData(id,pass);
        cy.url().should('eq','https://pay-pal-pioneers-068.vercel.app/');
    }
    InvalidLogin(id,pass){
        this.LoginData(id,pass);
        cy.contains('Login failed').should('be.visible');
    }
    Logout(id,pass){
        this.LoginData(id,pass);
        cy.contains('Sign out').click({force:true});
    }
}