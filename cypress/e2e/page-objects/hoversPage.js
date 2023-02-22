const figure = '.figure'
const figcaption = '.figcaption'

class HoversPage {
    hoverOverElement(){
        //w tym wypadku widzimy obrazek, ale nie pojawia się tekst po najechaniu na niego
        // cy.get(figure).first().trigger('mouseover')

        //invoke - wywołanie funkcji na poprzednio operowanym obiekcie
        cy.get(figcaption).first().should('be.hidden').invoke('show').should('be.visible')
    }
}

export default HoversPage;