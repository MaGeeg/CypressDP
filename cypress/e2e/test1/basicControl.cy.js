
describe('test description', () => {
    
    beforeEach(() => {
        cy.clearLocalStorage()
        //naszemu buttonowi dalismy alias button1
        cy.get('button').invoke('text').as('button1')
    })      
})