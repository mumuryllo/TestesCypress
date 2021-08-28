/// <reference types="Cypress"/>


describe('Work elements basics',()=>{
    before(() =>{
        cy.visit('http://wcaquino.me/cypress/componentes.html')     
    })

    beforeEach(() =>{
        cy.reload()    
    })
    
    //com o before não preciso repetir determinados códigos, beforeEach mesma coisa só que executa antes de cada teste
    it('Deve acessar o campo de texto da página',()=>{
     //get mostra todo o conteudo html da pagina, o body ja da acesso a todos os elementos da página 
     // não é sempre que eu posso fazer uma busca tão direta, pois pode conter o mesmo texto em diversas partes específicas
     //hooks evita ações repetitivas dos nossos teste e deixa o código mais limpo  
      
     cy.get('span').should('contain','Cuidado')
    
     cy.get('.facilAchar').should('have.text','Cuidado onde clica, muitas armadilhas...')
     //have.text tem que colocar o texto todo       
    })
    it('Campos de textos',()=>{
        //Em campos de texto devemos colocar o atributo value,Type permite escrever em campos de texto
        cy.get('#formNome').type('Teste Cypress')    
        cy.get('#formNome').should('have.value','Teste Cypress')
        //tem alguns ids que não interpreta no caso é só colocar(\\)
        cy.get('#tabelaUsuarios > :nth-child(2) > :nth-child(1) > :nth-child(6) > input').type('???')
        cy.get('[data-cy=dataSobrenome]').type('Teste12345{backspace}{backspace}').should('have.value','Teste123')
        cy.get('#elementosForm\\:sugestoes').clear().type('Erro{selectall}acerto', {delay:200}).should('have.value','acerto')
        //delay permite o tempo de cada teste a ser executado
   })
   it('Radio Button',()=>{
    cy.get('#formSexoMasc').click().should('be.checked')   
    cy.get('#formSexoFem').should('not.be.checked')
    cy.get("[name='formSexo']").should('have.length', 2)//indica a qtde de radiobuttons
   })
   it('Checkbox',()=>{
    // Checkbox é possivel selecionar varias coisas ao mesmo tempo   
    cy.get('#formComidaPizza').click().should('be.checked')   
    cy.get('[name = formComidaFavorita]').click({multiple:true})//click so sleciona um coloque {multiple:true}
    cy.get('#formComidaPizza').should('be.checked')   
    cy.get('#formComidaVegetariana').should('not.be.checked')
          })
          //ComboBox é Select e have.value, veja sempre pelo value
          it.only('Combo',()=>{
          cy.get('[data-test=dataEscolaridade]').select('Superior').should('have.value','superior')   
          })
          it.only('combo multiplo',()=>{
              //envia os valores dentro de um array dessa vez, olhe sempre o value
              //TODO validar as opções do combo
            cy.get('[data-testid=dataEsportes]').select(['natacao', 'Corrida','nada'])   
            //TODO validar opções selecionadas do combo multiplo 
          })
        })
  