import "cypress-localstorage-commands"

describe('Dev Tools Application Storage', () => {
    it('work with local and session storage', function() {
       
        //po uzyciu zostaną wyczyszczone all local storage, które mamy w przeglądarce 
        cy.clearAllLocalStorage()
        //po uzyciu zostaną wyczyszczone all session storage, które mamy w przeglądarce
        cy.clearAllSessionStorage()
        //po uzyciu zostaną wyczyszczone all wpisy z kontekstu strony na której obecnie się znajduję
        cy.clearLocalStorage()
        //po uzyciu zostaną wyczyszczone wpisy z kluczem test ze strony na której obecnie się znajduję
        cy.clearLocalStorage('test')
        //zostaną pobrane wszystkie wpisy w kontekście mojej strony
        cy.getAllLocalStorage()
        // zostaną pobrane wszystkie wpisy w kontekście mojej strony - z session storage
        cy.getAllSessionStorage()  
        //otrzymamy taki item z Local Storage jaki sobie zażyczymy - np.test
        cy.getLocalStorage('test')

        cy.setLocalStorage('test', '1')

        

        
    })
})