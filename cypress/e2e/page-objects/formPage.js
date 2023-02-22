
const firstname = '#fname'
const lastname = '#lname'
const submitButton='#formSubmitButton'



class FormPage{

    checkForm() {
        //cypress wyczysci nam naszego inputa
        cy.get(firstname).clear()
        //should = asercja -> spr czy input przyjął wartość 123
        cy.get(firstname).type('Greg')
        
        cy.get(lastname).clear()
        cy.get(lastname).type('Test')
        cy.get(submitButton).click()
        cy.once ('window:alert', (text) => {
            expect(text).to.eq('success')
             
        })
    }
    
    /*
    checkFormNotFilled() {
        let spy = cy.spy(window, 'alert');
        //cypress wyczysci nam naszego inputa
        cy.get(firstname).clear()
        //should = asercja -> spr czy input przyjął wartość 123
        cy.get(firstname).type('Greg')
        
        cy.get(lastname).clear()
        cy.get(lastname).type('Test')
        
        cy.get(submitButton).click().wait(4000)
            .then(() => {
                expect(spy).to.haveOwnProperty('callCount');
                expect(spy).to.not.be.called;
            });        
    } 
    */   
}
export default FormPage;