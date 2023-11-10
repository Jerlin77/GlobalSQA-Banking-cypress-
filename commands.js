// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.

/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('managerLogin',(Selector)=>{
    cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');
    cy.get(Selector.bankManagerLogin.bankName).should('contain','XYZ Bank');
    cy.get(Selector.bankManagerLogin.btnManager).click()//action
    cy.get(Selector.bankManagerLogin.btnPage).should('have.length',3)//assertion
})
Cypress.Commands.add('searchCustomer',(Selector)=>{
        cy.get(Selector.showCust.btnshowCust).click();//action
        cy.get(Selector.showCust.inputSearch).should('exist'); //assert
        cy.get(Selector.showCust.inputSearch).type('Harry')//ac
        cy.get(Selector.showCust.expected).should('contain', 'Harry');//as
 })
 Cypress.Commands.add('deleteCustomer',(Selector)=>{
    cy.get(Selector.showCust.btnshowCust).click();//action
    cy.get('table').should('exist')//assert
    cy.get('table').find('tbody tr').eq(3).find('td').eq(0).invoke('text').then((text) => {
    cy.get('table').find('tbody tr').eq(3).find('td').eq(4).find('button').click();
    });//action
    cy.get('tbody').should('not.contain', 'Albus');//assert
})

Cypress.Commands.add('customerLogin',(Selector)=>{
    cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');
    cy.get(Selector.bankManagerLogin.bankName).should('contain','XYZ Bank');
    cy.get(Selector.custLogin.btnCustomer).click();
cy.get(Selector.custLogin.yourName).should('contain','Your Name :');
cy.get(Selector.custLogin.selectCust).select('Harry Potter').should('have.value', '2');
cy.get(Selector.custLogin.btnSubmit).click();
cy.get(Selector.custLogin.custName).should('contain','Harry Potter');
})
Cypress.Commands.add('selectAccount',(Selector)=>{
    cy.get(Selector.selectAcc.accSelect).select('1006');
    cy.get(Selector.selectAcc.selectCurrency).should('exist');
})
Cypress.Commands.add('deposit',(Selector)=>{
    cy.get(Selector.credit.btnDeposit).click()//action
        cy.get(Selector.custLogin.yourName).should('contain','Amount to be Deposited :')//assert
         cy.get(Selector.credit.amountDeposit).type('200')
         cy.get(Selector.custLogin.btnSubmit).click()//action
         cy.get(Selector.credit.spanTxt).should('contain', 'Deposit Successful');//assert   
})
Cypress.Commands.add('withdraw',(Selector)=>{
    cy.get(Selector.debit.btnWithdraw).click()
    cy.get(Selector.custLogin.yourName).should('contain','Amount to be Withdrawn :')
    cy.get(Selector.credit.amountDeposit).type('20').should('have.value','20')
    cy.get(Selector.custLogin.btnSubmit).click()
    cy.get(Selector.credit.spanTxt).should('contain','Transaction successful')
    cy.wait(4000)
})
Cypress.Commands.add('transaction',(Selector)=>{
    cy.get(Selector.transacHistory.btnHistory).click();
    cy.get(Selector.transacHistory.tableLen).should('have.length', 2);
})
Cypress.Commands.add('resetBtn',(Selector)=>{
    cy.get(Selector.transacHistory.btnHistory).click();    
    cy.get(Selector.btnReset.resetBtn).click()
    cy.get(Selector.btnReset.expected).should('have.length', 0);
})
Cypress.Commands.add('logout',(Selector)=>{
    cy.get(Selector.logOut.btnLogout).click()  
    cy.get(Selector.logOut.expected).should('contain','Your Name :')
})