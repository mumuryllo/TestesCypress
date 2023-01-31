/// <reference types="Cypress"/>


describe('Tudo sobre alerts',()=>{
    before(() =>{
        cy.visit('http://wcaquino.me/cypress/componentes.html')     
    })

    beforeEach(() =>{
        cy.reload()    
    })
    it.only('Alerts',()=>{
        // Alert é um evento então usamos o comando cy.on
        // cy.get('#alert').click()
        // cy.on('window:alert', msg  =>{
        // expect(msg).to.be.equal('Alert Simples')   
        // })
        // Tudo sera substituido pelo comando que foi criado
        cy.clickAlert('#alert','Alert Simples')
    })

    it('Alerts com mock',()=>{
        //cy.stub, substitui uma função, armazena o uso e controla o comportamento 
        const stub = cy.stub().as('alerta')
        cy.on('window:alert', stub) 
        cy.get('#alert').click().then(()=>{
        expect(stub.getCall(0)).to.be.calledWith('Alert Simples')
        })
    })
    
    it('Confirm',()=>{
        // Confirm é um alert que te da mais de uma opção
        cy.get('#confirm').click()
        cy.on('window:confirm', msg  =>{
            expect(msg).to.be.equal('Confirm Simples')
            cy.on('window:alert', msg  =>{
                expect(msg).to.be.equal('Confirmado')   
                })  
        })             
    })
     
    it('Negado',()=>{
        // Confirm é um alert que te da mais de uma opção
        cy.get('#confirm').click()
        cy.on('window:confirm', msg  =>{
            expect(msg).to.be.equal('Confirm Simples')
            return false
            cy.on('window:alert', msg  =>{
                expect(msg).to.be.equal('Negado')   
                })  
        })             
    })
    it('Prompt',()=>{
        cy.window().then(win =>{
       cy.stub(win, "prompt").returns('42')     
        })
        // Prompt junta o Alert e Confirm e serve pra vc validar dados
        cy.get('#prompt').click()
        cy.on('window:prompt', msg  =>{
        expect(msg).to.be.equal('Era 42?')
        })
        cy.on('window:alert', msg  =>{
        expect(msg).to.be.equal(':D')  
        })
                cy.get('#prompt').click()
                          
    })
    it('Desafio Validar Mensagens',()=>{
        const stub = cy.stub().as('alerta') 
        cy.on('window:alert', stub) 
        cy.get('#formCadastrar').click().then(() => expect(stub.getCall(0)).to.be.calledWith('Nome eh obrigatorio'))
        cy.get('#formNome').type('Muryllo Soares')
        cy.get('#formCadastrar').click().then(() => expect(stub.getCall(1)).to.be.calledWith('Sobrenome eh obrigatorio'))
        cy.get('[data-cy=dataSobrenome]').type('Eleuterio Severino')
        cy.get('#formCadastrar').click().then(() => expect(stub.getCall(2)).to.be.calledWith('Sexo eh obrigatorio'))
        cy.get('#formSexoMasc').click
        cy.get('#formCadastrar').click
        cy.contains('Cadastrado!')
    })      
})
