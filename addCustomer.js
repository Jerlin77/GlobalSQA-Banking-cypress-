class addCustomer
{
    btnaddCust='button[ng-click="addCust()"]';
    lblMsg='div[class="form-group"]:nth-child(1)';
    Fname='input[ng-model="fName"]';
    Lname='input[ng-model="lName"]';
    Pcode='input[ng-model="postCd"]';
    btnSubmit='button[type="submit"]';
    
    addCust(fName,lName,pCode){

        cy.get(this.btnaddCust).click();//action
        cy.get(this.lblMsg).should('contain','First Name :');//assertion
        cy.get(this.Fname).type(fName)
        cy.get(this.Lname).type(lName)
        cy.get(this.Pcode).type(pCode)
        cy.get(this.btnSubmit).click()//action
        cy.on('window:alert',(txt)=>{//assertion
        expect(txt).to.equal('Customer added successfully with customer id :6');
       })  
    }
}
export default addCustomer;