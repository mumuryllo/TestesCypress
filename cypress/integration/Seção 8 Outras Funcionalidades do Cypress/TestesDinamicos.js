/// <reference types="Cypress"/>
/// <reference types="Cypress"/>


describe('Cypress Funcionalidades',()=>{

    beforeEach(()=>{
        cy.visit('http://wcaquino.me/cypress/componentes.html')
    })


    const foods = ['Carne','Frango','Pizza','Vegetariano']
    foods.forEach(food =>{
        it(`Testes Dinamicos com a Comida ${food}`,function (){
            cy.get('#formNome').type('Usuario')
            cy.get('#formSobrenome').type('Qualquer')
            cy.get(`[name=formSexo][Value=F]`).click()
            cy.xpath(`//label[contains(., '${food}')]/preceding-sibling::input`).click()
            cy.get('#formEscolaridade').select('Mestrado')
            cy.get('#formEsportes').select('Corrida')
            cy.get('#formCadastrar').click()
            cy.get('#resultado > :nth-child(1)').should('contain','Cadastrado!')
    })
    })


  
})
