/// <reference types="Cypress"/>
describe('Testes Dinamicos',()=>{

    const fodd=['Carne','Frango','Pizza','Vegetariano']
    it('Cadastro com comida variada',()=>{
        cy.visit('http://wcaquino.me/cypress/componentes.html')    
        cy.ClickAlert('#alert','Alert Simples')
    })
    })