import InputPage from '../page-objects/inputPage'
import HomePage from '../page-objects/homePage'
import CheckboxPage from '../page-objects/checkboxPage'
import DropdownListPage from '../page-objects/dropdownListPage'
import HoversPage from '../page-objects/hoversPage'
import BasicAuthPage from '../page-objects/basicAuthPage'
import FormPage from '../page-objects/formPage'
import KeyPressesPage from '../page-objects/keyPressesPage'
import AddRemoveElementsPage from '../page-objects/addRemoveElementsPage'
import StatusCodesPage from '../page-objects/statusCodesPage'
import IFramePage from '../page-objects/iFramePage'



describe('test description', () => {
    beforeEach(() => {
        //cy.get('button').invoke('text').as('button')
        cy.visit('/');
    })
    
    it('test inputs', function () {

        //pierwszy obiekt który klika nam w zakładki
        const homePage = new HomePage();
        
        //poruszamy sie w kontekście naszego obiektu
        //gdy mamy beforeEach nie robimy visitPage
        // homePage.visitPage()
        // .then() 
        
        homePage.clickInputsTab()

        const inputPage = new InputPage();
        inputPage.typeNumberIntoField()
        inputPage.typeLettersIntoField()

    })
    it('test checkbox', function () {
        
        const homePage = new HomePage();       
        // homePage.visitPage()
        homePage.clickCheckboxTab()

        const checkboxPage = new CheckboxPage();
        checkboxPage.checkFirstCheckbox()
        checkboxPage.uncheckLastCheckbox()
        

    })
    it('test dropdown list', function () {

        const homePage = new HomePage();
        homePage.clickDropdownListTab()

        const dropdownPage = new DropdownListPage();
        dropdownPage.chooseDropdownListFirstOption()
    })

    it('test hover', function () {

        const homePage = new HomePage();
        homePage.clickHoversTab()

        const hoversPage = new HoversPage();
        hoversPage.hoverOverElement()
    })

    it('test basic auth', function () {

        const homePage = new HomePage();
        homePage.clickBasicAuthTab();

        const basicAuthPage = new BasicAuthPage();
        basicAuthPage.checkBasicAuthBadCredentials();
        basicAuthPage.checkBasicAuthAdmin();
    })

    it('test form ', function () {

        const homePage = new HomePage();
        homePage.clickFormTab();

        const formPage = new FormPage();
        formPage.checkForm();
        // formPage.checkFormNotFilled();
        
    })

    
    it('test key presses', function () {
        
        const homePage = new HomePage();
        homePage.clickKeyPressesTab();

        const keyPressesPage = new KeyPressesPage();
        keyPressesPage.typeNumberIntoField();
        keyPressesPage.typeLettersIntoField();
        keyPressesPage.typeEscapeIntoField();
    })
    
    
    it('test add remove elements', function () {

        const homePage = new HomePage();
        homePage.clickAddRemoveElementsTab();

        const addRemoveElementsPage = new AddRemoveElementsPage();
        addRemoveElementsPage.checkNoElements();
        addRemoveElementsPage.checkAddOneElement();
        addRemoveElementsPage.checkAddAndDeleteElements();
    })

    it('test status codes', function () {
        
        const homePage = new HomePage();
        homePage.clickStatusCodesTab(); 

        const statusCodesPage = new StatusCodesPage();
        statusCodesPage.checkStatusCode200();
        statusCodesPage.checkStatusCode305();
        statusCodesPage.checkStatusCode404();
        statusCodesPage.checkStatusCode500();
    })

    it('test iframe', function () {
        const homePage = new HomePage();
        homePage.clickIFrameTab();

        const iFramePage = new IFramePage();
        iFramePage.checkClickButton1();
        iFramePage.checkClickButton2();
    })
        
})