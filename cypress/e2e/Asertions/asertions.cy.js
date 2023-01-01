describe('my first asertion', () =>{
    it('visit main page and click top menu button', function(){
        //bierzemy el selected i jego długość powinna być 3 - ma zawierac 3 el
        cy.get('li.selected').should('have.length', 3)
        //bierzemy form, który ma nie mieć klasy disabled
        cy.get('form').find('input').should('not.have.class', 'disabled')
        //textarea musi miec wartość fabryka testow
        cy.get('textarea').should('have.value', 'fabrykaTestow')
        //have.text - zawiera dokładnie ten tekst co do jednego znaku        
        cy.get('[data-testid="user-name"]').should('have.text', 'Pawel Z')
        //include.text - tekst jest częścią składową sprawdzanego el.
        //contains.text - alias polecenia include
        cy.get('[data-testid="adress"]').should('include.text', 'Polska')

        cy.get('a').parent('span.help').should('not.contain', 'click me')
        //czy dany el jest widoczny na stronie
        cy.get('[data-testid="form-submit"]').should('be.visible')
        //el. występuje na stronie ale jest niewidoczny
        cy.get('li.hidden').should('not.be.visible')
        //el. nie wyst na stronie wogóle
        cy.get('[data-testid="loading"]').should('not.exist')
        //spradzamy czy checkbox jest klikniety
        cy.get(':radio').should('be.checked')
    })
})