/// <reference types ="cypress"/>
import { faker } from '@faker-js/faker';
import cadastroPages from '../support/pages/cadastro-pages';

describe('Funcionalidade: Cadastro Hub de Leitura', () => {
    beforeEach(() => {
        cadastroPages.visitarPaginaCadastro()
    });
    it('Deve fazer cadastro com sucesso usando função JS', () => {
        let email = `teste${Date.now()}@teste.com`
        cy.get('#name').type('Amanda Fugii')
        cy.get('#email').type(email)
        cy.get('#phone').type('13991618998')
        cy.get('#password').type('Senha@123')
        cy.get('#confirm-password').type('Senha@123')
        cy.get('#terms-agreement').check()
        cy.get('#register-btn').click()

    });
    it('Deve fazer cadastro com sucesso usando Faker', () => {
        let nome = faker.person.fullName()
        let email = faker.internet.email()
        cy.get('#name').type(nome)
        cy.get('#email').type(email)
        cy.get('#phone').type('13991618998')
        cy.get('#password').type('Senha@123')
        cy.get('#confirm-password').type('Senha@123')
        cy.get('#terms-agreement').check()
        cy.get('#register-btn').click()
        //resultado esperado 
        cy.url().should('include', 'dashboard')
        cy.get('#user-name').should('contain', nome)
    });


    it ('Deve preencher cadastro com sucesso - usando comando customizado', () => {
        let email = `teste${Date.now()}@teste.com`
        cy.preencherCadastro('Amanda Fugii',email,'13996968989','Senha123','Senha123',
        )
});

    it('Deve preencher cadastro com sucesso - Usando Page Objects', () => {
        let email = `teste${Date.now()}@teste.com`
        cadastroPages.preencherCadastro('Amanda Fugii',email,'11998989898','Teste123','Teste123')
       cy.url().should('include','dashboard')
    })
    it ('Deve validar mensagem ao tentar cadastrar sem preencher nome', () => {
        cadastroPages.preencherCadastro('','teste@teste.com','141414141414','Teste123','Teste123')
        cy.get(':nth-child(1) > .invalid-feedback').should('contain', 'Nome deve ter pelo menos 2 caracteres')
    });

});