

describe('my first cookie', () =>{
    it('visit main page and click top menu button', function(){
        cy.visit('https://fabrykatestow.pl')

        //pobiera all cookies z przeglądarki
        cy.getAllCookies()

        //pobiera cokkies z konkretnej domeny na której sie znajdujemy
        cy.getCookies()

        //pobiera konkretne ciastko
        cy.getCookie('_gid')

        const a = cy.getAllLocalStorage()
        console.log(a)
    })
    it.only('should work with cookies', function(){
        cy.visit('https://fabrykatestow.pl')
        
        cy.clearCookie('foo')
        cy.clearCookies()
        //cy.clearAllCookies()

        //dodajemy cookie do naszej przeglądarki
        cy.setCookie('foo', 'bar')
        //pobieram cookie
        cy.getCookie('foo')
        //pobieram all cookies w kontekscie mojej domeny
        cy.getCookies()


    })
})