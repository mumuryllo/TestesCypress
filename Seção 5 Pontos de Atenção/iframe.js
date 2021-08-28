/// <reference types="Cypress"/>


describe('Tudo sobre Iframes',()=>{
    before(() =>{
        cy.visit('http://wcaquino.me/cypress/componentes.html')     
    })

    beforeEach(() =>{
        cy.reload()    
    })
    it('Deve preencher campo de texto',()=>{
        // Iframe abre oudtra aba dentro de uma mesma pagina, contents pega os filhos dos elementos
        cy.get('#frame1').then(iframe =>{
       const body= iframe.contents().find('body') 
       cy.wrap(body).find('#tfield').type('Funciona?').should('have.value','Funciona?') 
       
        })
    })
    it('Deve testar o frame',()=>{
        cy.visit('http://wcaquino.me/cypress/frame.html') 
        cy.get('#otherButton').click()
        cy.on('window:alert', msg =>{
            expect(msg).to.be.equal('Click OK!')
        })
        
       })
})