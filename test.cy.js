import "/cypress/support/commands.js"
import addCustomer from "../features/addCustomer.js";
import openAccount from "../features/openAccount.js";
import faker from 'faker';

describe('Banking Project Test Suite',()=>{ 
    let data, Selector;
    before('Fixture', () => {
        cy.fixture('testData.json').then((userdata) => {
            data = userdata;
        });
        cy.fixture('selectors.json').then((selector) => {
            Selector =  selector;
        });
    });
    it('Test Case 1: Fill the required field and click Add Customer',()=>{ 
        //Faker      
        cy.managerLogin(Selector)
        const newCust=new addCustomer();
        newCust.addCust(faker.name.firstName(),faker.name.lastName(),faker.address.zipCode());  
})
    it('Test Case 2: Select dropdown in Open Account page',()=>{
        //POM
        cy.managerLogin(Selector)
       const openAcc=new openAccount();
       openAcc.openAcc();
    })
    it('Test Case 3: Verify search functionality',()=>{
        cy.managerLogin(Selector)
       cy.searchCustomer(Selector)
       })
    it('Test Case 4: Delete a customer record from the table',()=>{
        cy.managerLogin(Selector)
        cy.deleteCustomer(Selector)
      })
    it('Test Case 5: Choose an Account with Rupees Currency',()=>{ 
        cy.customerLogin(Selector)
        cy.selectAccount(Selector)
    })
    it('Test Case 6: Money Deposit with Success Message',()=>{
        cy.customerLogin(Selector)
        cy.deposit(Selector)
     })
    it('Test Case 7: Money Withdrawl with Success Message',()=>{
        cy.customerLogin(Selector)
        cy.deposit(Selector)
        cy.withdraw(Selector)
    })
    it('Test Case 8: Confirm recent transaction history updates',()=>{
        cy.customerLogin(Selector)
        cy.deposit(Selector)
        cy.withdraw(Selector)
        cy.transaction(Selector)
   })
    it('Test Case 9: Verification of Transaction Table Reset Button',()=>{
        cy.customerLogin(Selector)
        cy.deposit(Selector)
        cy.withdraw(Selector)
        cy.resetBtn(Selector)
 }) 
it('Test Case 10: Verify Logout functionality',()=>{
    cy.customerLogin(Selector)
    cy.logout(Selector)
 })
});