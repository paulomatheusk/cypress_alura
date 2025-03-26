describe('template spec', () => {
    it('passes', () => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.get('.button').click();
        cy.get('.header__home').click();
        cy.visit('https://adopet-frontend-cypress.vercel.app/login');
        cy.visit('https://adopet-frontend-cypress.vercel.app/home');
        cy.get('.header__message').click()  
     })
  })