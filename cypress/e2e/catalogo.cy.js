/// <reference types ="cypress"/>

describe('Funcionalidade: Catalogo de livros', () => {

    beforeEach(() => {
        cy.visit('catalog.html')
    });
    
    it ('Deve clicar em todos os botões adicionar à cesta', () => {
    cy.get('.btn-primary').click({multiple: true})

    });

    it ('Deve clicar no primeiro botão adicionar à cesta', () => {
    cy.get('.btn-primary').first().click()

    });

    it ('Deve clicar no último botão adicionar à cesta', () => {
    cy.get('.btn-primary').last().click()
    });

    it ('Deve clicar no terceiro botão adicionar à cesta', () => {
    cy.get('.btn-primary').eq(2).click()
    });

    it ('Deve clicar no nome d livro e ser redirecionado para a tela do livro', () => {
    cy.contains ('Dom Casmurro').click()
    cy.url().should ('include','book-details')
    cy.get('#add-to-cart-btn').click()
    cy.get('#alert-container').should('contain', 'Livro adicionado à cesta com sucesso!')
    });
});