describe('my first scenario', () =>{
    it('visit main page and click top menu button', function(){
        //visit - przechodzi pod adres podanej strony i oczekujemy że strona sie załaduje
        cy.visit('https://fabrykatestow.pl')
        //get - znajdzie nam lokator na stronie, jesli nie ma el. po 4s info że nie ma el.
        cy.get('#nv-primary-navigation-main')
        //contains - info że el. ma mieć zadany filtr tekstowy 
        cy.get('#nv-primary-navigation-main').contains('Newsletter')
        //click 
        cy.get('#nv-primary-navigation-main').contains('Newsletter').click()
        //url - sprawdzamy pod jakim jestesmy url i bedzie go trzymac
        cy.url()
        //should 
        //asercja - czy jestesmy na odpowiedniej stronie
        cy.url().should('eq', 'https://fabrykatestow.pl/ciekawostki/')

        //eq - info który el mam wziąć
        cy.get('.elementor-inner').eq(0)
        //first - bierzemy pierwszy el
        cy.get('.elementor-inner').first()
        //last - bierzemy ostatni el
        cy.get('.elementor-inner').last()
        //log - cypress wypisze nam podany tekst w tym miescu
        cy.log('this is my cypress message')
        //request - wykona zapytanie pod konkretny adres, domyslnie ustawia metodę get do pobrania danych, możemy testować API tym poleceniem 
        cy.request('https://fabrykatestow.pl/')
        //wait - wartość w milisekundach
        cy.wait(1000)
    })
})