class Urls{
    //tworzymy swoje url do testowania do przejść
    visitHomePage() {
        const url = '/'
        cy.visit(url)
    } 

    visitTestPage() {
        const url = '/test'
        cy.visit(url)
    }
    
    visitShopPage() {
        const url = '/'
        cy.visit(url)
    } 
    
    visitMyAccountPage() {
        const url = '/?page_id=9'
        cy.visit(url)
    }
}
export default Urls;

