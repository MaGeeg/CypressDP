
const elements = '#elements'
const addElementButton = 'button[onclick="addElement()"]'
const deleteButtons = '.added-manually'

class AddRemoveElementsPage{
    checkNoElements() {
        cy.get(elements).children().should('have.length', 0)
    }

    checkAddOneElement() {
        cy.get(addElementButton).click();
        cy.get(elements).children().should('have.length', 1)
        cy.get(deleteButtons).click()
        cy.get(elements).children().should('have.length', 0)
    }

    checkAddAndDeleteElements() {
        cy.get(addElementButton).click().click().click().click();
        cy.get(elements).children().should('have.length', 4)
        cy.get(deleteButtons).first().click()
        cy.get(deleteButtons).first().click()
        cy.get(elements).children().should('have.length', 2)
        cy.get(deleteButtons).first().click()
        cy.get(deleteButtons).first().click()
        cy.get(elements).children().should('have.length', 0)
    }
    
    
}
export default AddRemoveElementsPage;
