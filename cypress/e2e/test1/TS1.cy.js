import ShopPage from '../page-objects/shopPage'
import AccountPage from '../page-objects/myAccountPage'
import {faker} from '@faker-js/faker';
import CartPage from '../page-objects/cartPage';


describe('my first scenario', () => {
    const shopPage = new ShopPage();
    const accountPage = new AccountPage();
    const cartPage = new CartPage();
    // const orderPage = new OrderPage();

    before(function () {
        //w katalogu fixture jest plik users | as = zapisujemy nasz alias
        cy.fixture('users').as('userData')


    })

    it('should login to the application', function() {
        shopPage.visitPage()
        shopPage.clickMyAccountHeaderButton()
        accountPage.fillUsernameFieldWithEmail(this.userData.email)
        accountPage.fillPasswordField(this.userData.password)
        accountPage.clickLoginButton()
        accountPage.checkVisibilityOfMyAccountNavigation()
    })

    it('should not login to the application', function(){
        accountPage.visitPage()
        accountPage.fillUsernameFieldWithEmail(faker.internet.email())
        accountPage.fillPasswordField(faker.internet.password())
        accountPage.clickLoginButton()
        //tu jest moja asercja
        accountPage.checkVisibilityOfErrorAfterWrongLogin()
    })

    it('should add product to cart and delete it from there', function(){
        shopPage.visitPage()
        shopPage.addProductToCart()
        shopPage.clickGoToCartFromProductButton()
        cartPage.checkThatAddedProductIsInCart()
        cartPage.removeItemFromCart()
        cartPage.checkThatCartIsEmpty()
    })



})