/// <reference types="Cypress"/>
describe('Cypress Funcionalidades',()=>{

    it('Criando comandos no cypress',()=>{
        //para criar um comando primeiro vá em comand.js em support
        // Dois parametros string e uma função
        cy.visit('http://wcaquino.me/cypress/componentes.html')    
        cy.ClickAlert('#alert','Alert Simples')
   })
})