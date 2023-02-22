describe('test description', () => {
    
    beforeEach(() => {
        cy.clearLocalStorage()
        //naszemu buttonowi dalismy alias button1
        cy.get('button').invoke('text').as('button1')
    })  
    
    it('should be able to setup filters', () => {
       //w it odwołujemy sie do naszego buttona który jest w naszym beforeEach
       //gdyby button był w then() to nie ma jak sie odwołac bo jestesmy poza chainem który przechodzi od najwyższego przypadku
       //to co dzieje sie w chain jest dostepne wewn. niego i potem schodzimy w dół 
       //najprostszy sposób aby aliasować cos co chcę udostepnić - use instruction 'as'
    //    this.button1
        cy.get('table').find('tr').as('rows')
        //dostajemy się do rows
        cy.get('@rows').first().click()
        //czekamy na ten el
        cy.wait('@rows')
    })
})