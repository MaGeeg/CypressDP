const url = 'https://simpletestsite.fabrykatestow.pl/'

const iframeHeader = '#iframe-header'
const iframe = 'iframe'
const button = '#simpleButton1'

describe('my first iframe', () => {
    it('', function() {
       cy.visit(url) 

       cy.get(iframeHeader).click()

       //robimy iframe test
       const iframeTest = cy.get(iframe)
       //bierzemy w nim pierwszy content document i body
        .its('0.contentDocument.body')
       //chcemy zeby nasze body było widoczne
        .should('be.visible')
        //łapiemy naszego iframe i mamy owrapowane body
        .then(cy.wrap)
        //szukamy button1
        iframeTest.find(button).click()        

    })
})