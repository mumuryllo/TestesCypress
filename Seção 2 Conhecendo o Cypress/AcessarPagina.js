/// <reference types="Cypress"/>
describe('Cypress basics',()=>{
 it.only('Deve acessar a pagina e acessar o titulo dela',()=>{
  cy.visit('http://wcaquino.me/cypress/componentes.html')
  //const titulo=cy.title(), only serve para acessar uma parte de um testes e debug da mais detalhes do teste
  //console.log(titulo);
// o cypress recebe as informações de forma assíncrona então o que temos que fazer é
cy.title().should('be.equal','Campo de Treinamento')   
cy.title().should('contain','Campo ') 
 })   
 it('clique no botão obrigado e interaga com ele',()=>{
cy.visit('http://wcaquino.me/cypress/componentes.html')
cy.get('#buttonSimple').click() 
cy.get('#buttonSimple').should('have.value','Obrigado!')  
//todo teste tem que ter assertivas, it serve para dizer qual teste quer executar
 })
})