

const input = '#target'
const keyPressResult = '#keyPressResult'

class KeyPressesPage{
    typeNumberIntoField() {
        //cypress wyczysci nam naszego inputa
        cy.get(input).clear()
        //should = asercja -> spr czy input przyjął wartość 123
        cy.get(input).type('1')
        cy.get(keyPressResult).should('have.text', 'You entered: 1')


    }
    typeLettersIntoField() {
        cy.get(input).clear()
        cy.get(input).type('a')
        cy.get(keyPressResult).should('have.text', 'You entered: A')

    }

    typeEscapeIntoField() {
        cy.get(input).clear()
        cy.get(input).type('{esc}')
        cy.get(keyPressResult).should('have.text', 'You entered: ESCAPE')

    }
    
}
export default KeyPressesPage;
