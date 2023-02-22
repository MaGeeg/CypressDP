
const username = '#ba_username'
const password = '#ba_password'
const loginButton='button[onclick="onLoginSubmit()"]'
const loginMessage='#loginFormMessage'
const loggedInMessage = '#loggedInMessage'

class BasicAuthPage{

    checkBasicAuthBadCredentials() {
        //cypress wyczysci nam naszego inputa
        cy.get(username).clear()
        //should = asercja -> spr czy input przyjął wartość 123
        cy.get(username).type('Greg')
        
        cy.get(password).clear()
        cy.get(password).type('gregtest')
        cy.get(loginButton).click()
        cy.get(loginMessage).should('have.text', 'Invalid credentials')

    }
    checkBasicAuthAdmin() {
        //cypress wyczysci nam naszego inputa
        cy.get(username).clear()
        //should = asercja -> spr czy input przyjął wartość 123
        cy.get(username).type('admin')
        
        cy.get(password).clear()
        cy.get(password).type('admin')
        cy.get(loginButton).click()
        cy.get(loggedInMessage).should('have.text', 'You are logged in!')
        cy.url().should('be.equal', 'https://simpletestsite.fabrykatestow.pl/basicauth.html')
        
    }
}
export default BasicAuthPage;