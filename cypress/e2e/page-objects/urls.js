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
}
export default Urls;

