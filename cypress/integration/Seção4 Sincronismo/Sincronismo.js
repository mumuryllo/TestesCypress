/// <reference types="Cypress"/>


describe('Sincronismo de testes',()=>{
    before(() =>{
        cy.visit('http://wcaquino.me/cypress/componentes.html')     
    })

    beforeEach(() =>{
        cy.reload()    
    })
    it('deve aguardar elemto estar disponivel',()=>{
        // o cypress demora um tempo até saber se determinada parte da aplicação existe
        cy.get('#novoCampo').should('not.exist')
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo').should('not.exist')
        cy.get('#novoCampo').should('exist')
        cy.get('#novoCampo').type('Está funcionando')

    })

    
    it.only('deve fazer retentativas(retrys)',()=>{
        //ele fica retantando esses gets até que todas as associativas sejam verdadeiras
        // e eu não deixar uma assertiva junto de outra senão vai dar null
        cy.get('#buttonDelay').click()      
        cy.get('#novoCampo').should('exist').type('Está funcionando')
    })

    it.only('Ferramenta de busca cuidados',()=>{
        //Cuidado com o que voce busaca fique fique sempre de olhos em span,value,article pois influencia na busca
        //find busca algum conteudo dentro das tags, ha casos em que vc vai ter que fazer uma busca completa
        cy.get('#buttonList').click()
        cy.get('#lista li').find('span').should('contain','Item 1')
        cy.get('#buttonList').click()
        cy.get('#lista li').find('span').should('contain','Item 2')
    })

    it.only('Uso do Wait e TimeOut',()=>{
        //timeout tempo que leva pra ser executado determinada aplicação
        // tempo de espera para executar a aplicação só use em casos extremos cy.wait(2000)
        cy.get('#buttonDelay').click()      
        cy.get('#novoCampo').should('exist')
    })
    it.only('Should X Then',()=>{
        //should dependendo de alguns testes aptrapalha pois fica em um loop infinito nesses caso use o then
        cy.get('#buttonListDOM').click()
        cy.get('#lista li span').then($el =>{
        // .should('have.length'.1)
         expect($el).to.have.length(1)   
        })
    }) 
})