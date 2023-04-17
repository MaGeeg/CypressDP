const url = 'http://register.rediff.com/register/register.php'

describe('my first alert', () => {
    it('work with alerts', function() {
        cy.visit(url)
        cy.get('input[type="submit"]').click()

        //sprawdzamy czy alert jest zgodny z tym co mamy w załozeniach naszego projektu
        //on - daje nam opakowanie window alerta, którego przetwarzamy i spr w nim czy komunikat jest zgodny z oczekiwanym 
        cy.on('window:alert', (t)=>{
            expect(t).to.contains('Your full name cannot')
        })


       
       

        

        
    })
})