import {faker} from '@faker-js/faker';

const firstNameField = '#billing_first_name'
const lastNameField = '#billing_last_name'
const countryDropdown = '#billing_country'
const addressField = '#billing_address_1'
const postalCodeField = '#billing_postcode'
const cityField = '#billing_city'
const phoneField = '#billing_phone'
const emailField = '#billing_email'
const finishOrderButton = '#place_order'
const countryDropdownPoland = 'Polska'

class OrderPage{
    fillAllRequiredFields(){
        cy.get(firstNameField).type(faker.name.firstName())
        cy.get(lastNameField).type(faker.name.lastName())
        cy.get(countryDropdown).select(countryDropdownPoland, {force:true})
        cy.get(addressField).type(faker.address.streetAddress())
        cy.get(postalCodeField).type(faker.address.zipCode('##-###'))
        cy.get(cityField).type(faker.address.city())
        cy.get(phoneField).type(faker.phone.number('+48#########'))
        cy.get(emailField).type(faker.internet.email())
    }
    clickOrderFinishButton(){
        cy.get(finishOrderButton).click()
    }
    checkOrderFinished(){
        //zrobic lepsza asercję - zapiąć sie do czegoś innego, tekst jest bardzo zmienny

        //wersja z timeout - sprawdza kiedy sie wykona asercja i wtedy ją sprawdza może to być 1s a może 10s
        cy.get('.entry-title').should('exist')
        // cy.contains('Zamówienie otrzymane', {timeout:10000}).should('exist')
        // cy.contains('Zamówienie otrzymane').should('exist')
    }

}

export default OrderPage;