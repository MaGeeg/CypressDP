

const input = 'input[type="number"]'

class InputPage{
    typeNumberIntoField() {
        //cypress wyczysci nam naszego inputa
        cy.get(input).clear()
        //should = asercja -> spr czy input przyjął wartość 123
        cy.get(input).type('123').should('have.value','123')

    }
    typeLettersIntoField() {
        cy.get(input).clear()
        cy.get(input).type('abc').should('not.have.value', 'abc')

    }
    
}
export default InputPage;

