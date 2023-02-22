const dropdownList = 'select'

class DropdownListPage {
    chooseDropdownListFirstOption(){
        cy.get(dropdownList).select('Option 1').should('have.value', '1')
    }

}
export default DropdownListPage;