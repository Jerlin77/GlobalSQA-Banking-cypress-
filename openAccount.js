class openAccount
{
    btnopenAcc='button[ng-click="openAccount()"]';
    lblMsg='div.form-group:nth-child(1)';
    drpdwnUser='select[name="userSelect"]';
    drpdwnCurrency='select[name="currency"]';
    btnSubmit='button[type="submit"]';
    openAcc(){
        cy.get(this.btnopenAcc).click();//action
        cy.get(this.lblMsg).should('contain','Customer :');//assert
        cy.get(this.drpdwnUser).select('Harry Potter').should('have.value','2');
        cy.get(this.drpdwnCurrency).select('Rupee').should('have.value','Rupee');
        cy.get(this.btnSubmit).click();//action
        cy.on('window:alert',(txt)=>{//assert
            expect(txt).to.equal('Account created successfully with account Number :1016');
        })
    }
}
export default openAccount;