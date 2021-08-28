/// <reference types="Cypress"/>


describe('Work elements basics',()=>{
    before(() =>{
        cy.visit('http://wcaquino.me/cypress/componentes.html')     
    })

    beforeEach(() =>{
        cy.reload()    
    })
    it('Locators com Jquery',()=>{
        cy.get(':nth-child(1) > :nth-child(3) > [type="button"]') 
    })

    it('Usando XPath',()=>{
        cy.xpath('//input[contains(@onclick ,\'Francisco\')]')
        // O(//) serve para fazer uma busca mais direta, através do([])posso dar mais informações
        //Sempre coloque um @ quando for fazer a busca específica
        //Eu poderia fazer a busca por numeros mais tabelas são dinâmicas e mudam o tempo todo
        // o (..//)serve escalar o nivel hierarquico das tags HTML 
    })
})