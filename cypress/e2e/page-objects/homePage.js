import Urls from "./urls";

//metody use in class HomePage - click po headerach aby przetestować konkretną kontrolkę, funkcję strony
const inputsHeader = '#inputs-header' 
const checkboxHeader = '#checkbox-header'
const dropdownListHeader = '#dropdownlist-header'
const hoversHeader = '#hovers-header'
const basicAuthHeader = '#basicauth-header'
const formHeader = '#form-header'
const keyPressesHeader = '#keypresses-header'
const addRemoveElementsHeader = '#addremoveelements-header'
const statusCodesHeader = '#statuscodes-header'
const iFrameHeader = '#iframe-header'

class HomePage{
    //piszemy metodę - kliknięcia po zakładkach
    clickInputsTab()  {
        cy.get(inputsHeader).click()        
    }

    clickCheckboxTab() {
        cy.get(checkboxHeader).click()
    }

    clickDropdownListTab() {
        cy.get(dropdownListHeader).click()
    }

    clickHoversTab() {
        cy.get(hoversHeader).click()
    }

    clickBasicAuthTab() {
        cy.get(basicAuthHeader).click()
    }

    clickFormTab() {
        cy.get(formHeader).click()
    }

    clickKeyPressesTab() {
        cy.get(keyPressesHeader).click()
    }

    clickAddRemoveElementsTab() {
        cy.get(addRemoveElementsHeader).click()
    }

    clickStatusCodesTab() {
        cy.get(statusCodesHeader).click()
    }

    clickIFrameTab() {
        cy.get(iFrameHeader).click()
    }

    visitPage() {
        const url = new Urls()
        url.visitHomePage()
    }
}
//aby móc uzywać metody visitPage
export default HomePage;