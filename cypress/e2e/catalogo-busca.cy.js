/// <reference types ="cypress"/>
import book from "../fixtures/livros.json"


describe('Funcionalidade: Busca no catálogo', () => {
   beforeEach(() => {
   cy.visit('catalog.html')
   });

   it('Deve fazer a busca do livro 1984 com sucesso', () => {
    cy.get('#search-input').type('1984')
    cy.get('.card > .card-body').should('contain','1984')
});

   it ('Deve fazer a busca de um livro da massa de dados', () => {
    cy.get('#search-input').type (book[1].livro)
    cy.get('.card > .card-body').should('contain',book[1].livro )
    
})

});