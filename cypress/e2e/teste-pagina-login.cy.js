// o beforeEach serve para separar duas responsabilidades por meio de um hook
describe('Pagina de login', () => {
    beforeEach(() => {
      cy.visit('https://adopet-frontend-cypress.vercel.app/');
      cy.get('[data-test="login-button"]').click();
    })
        it('Deve preencher os campos do login corretamente e autenticar o usuário na página', () => {
          cy.get('[data-test="input-loginEmail"]').type('paulo@gallo.com');
          cy.get('[data-test="input-loginPassword"]').type('Senha123');
          cy.get('[data-test="submit-button"]').click();
        })
})