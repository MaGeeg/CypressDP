import ShopPage from '../page-objects/shopPage'
import {faker} from '@faker-js/faker';
import CartPage from '../page-objects/cartPage';

//kod tego testu jest taki sam jak test TS1 - z kursu Paweł


describe('my first scenario', () => {
    const shopPage = new ShopPage();
    
    const cartPage = new CartPage();
    // const orderPage = new OrderPage();

    before(function () {
        //w katalogu fixture jest plik users | as = zapisujemy nasz alias
        cy.fixture('users').as('userData')


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