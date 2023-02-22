const clickButton1 = '#simpleButton1'
const clickButton2 = '#simpleButton2'
const element = '#whichButtonIsClickedMessage'

const getIframeDocument = () => {
    return cy
    .get('iframe')
    // Cypress yields jQuery element, which has the real
    // DOM element under property "0".
    // From the real DOM iframe element we can get
    // the "document" element, it is stored in "contentDocument" property
    // Cypress "its" command can access deep properties using dot notation
    // https://on.cypress.io/its
    .its('0.contentDocument').should('exist')
  }
  
  const getIframeBody = () => {
    // get the document
    return getIframeDocument()
    // automatically retries until body is loaded
    .its('body').should('not.be.undefined')
    // wraps "body" DOM element to allow
    // chaining more Cypress commands, like ".find(...)"
    .then(cy.wrap)
  }



class iFramePage {
    checkClickButton1() {
        // cy.get('iframe');
        // cy.get(clickButton1).click();
        // cy.get(element).children().should('have.text', 'Button 1 was clicked!' )
        getIframeBody().find(clickButton1).click()
        getIframeBody().find(element).should('have.text', 'Button 1 was clicked!')
    }

    checkClickButton2() {
        getIframeBody().find(clickButton2).click()
        getIframeBody().find(element).should('have.text', 'Button 2 was clicked!')
    }
}

export default iFramePage;

