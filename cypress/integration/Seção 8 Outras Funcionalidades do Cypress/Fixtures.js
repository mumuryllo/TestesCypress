/// <reference types="Cypress"/>


describe('Cypress Funcionalidades',()=>{

    it('Criando comandos no cypress',function (){
        cy.visit('http://wcaquino.me/cypress/componentes.html')
           
        cy.fixture('userData').as('Muryllo').then(() => {
            cy.get('#formNome').type(this.Muryllo.nome)
            cy.get('#formSobrenome').type(this.Muryllo.sobrenome)
            cy.get(`[name=formSexo][value=${this.Muryllo.sexo}`).click()
            cy.get(`[name=formComidaFavorita][value=${this.Muryllo.comida}]`).click()
            cy.get('#formEscolaridade').select(this.Muryllo.escolaridade)
            cy.get('#formEsportes').select(this.Muryllo.esportes)
            cy.get('#formCadastrar').click()
            cy.get('#resultado > :nth-child(1)').should('contain','Cadastrado!')
        })
})
})
