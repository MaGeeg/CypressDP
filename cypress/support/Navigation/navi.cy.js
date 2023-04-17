describe('my first navi', () =>{
    it('visit main page and click top menu button', function(){
        cy.visit('https://fabrykatestow.pl')
        //przechodzimy na stronę newsletter
        cy.get('#nv-primary-navigation-main').contains('Newsletter').click()

        //wracamy na stronę główną
        cy.wait(2000)
        cy.go('back')

        cy.wait(2000)
        cy.go('forward')

        //cofam sie o 1 stronę - gdy podamy (-2, ..., -5) to cofniemy sie o podaną liczbę stron
        cy.wait(2000)
        cy.go(-1)

        //przechodzimy do przodu o podaną liczbę stron
        cy.wait(2000)
        cy.go(1)
    })
})