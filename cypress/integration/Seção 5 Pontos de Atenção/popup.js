/// <reference types="Cypress"/>


describe('Tudo sobre PopUps',()=>{
    it('Deve testar o popup',()=>{
        cy.visit('http://wcaquino.me/cypress/frame.html') 
        cy.get('#otherButton').click()
        cy.on('window:alert', msg =>{
            expect(msg).to.be.equal('Click OK!')
        })
        
       })
    it.only('Deve verificar se o popup foi invocado',()=>{
    cy.visit('http://wcaquino.me/cypress/componentes.html')    
    cy.window().then(win =>{
    cy.stub(win, 'open').as('winOpen')    
    })
     cy.get('#buttonPopUp').click() 
    })
})