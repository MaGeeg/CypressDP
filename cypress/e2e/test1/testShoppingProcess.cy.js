import ShopPage from '../page-objects/shopPage';
// import {faker} from '@faker-js/faker';
import CartPage from '../page-objects/cartPage';
import OrderPage from '../page-objects/orderPage';

//kod tego testu jest taki sam jak test TS2 - z kursu Paweł

describe('my first scenario', () => {
    const shopPage = new ShopPage();
    const cartPage = new CartPage();
    const orderPage = new OrderPage();

    before(function () {
        //w katalogu fixture jest plik users | as = zapisujemy nasz alias
        cy.fixture('products').as('productData')


    })
    
    it('should order product from the shop', function(){
        shopPage.visitPage()
        shopPage.addProductToCart(this.productData.LongSleeveTee)
        shopPage.clickGoToCartFromProductButton()
        cartPage.checkThatAddedProductIsInCart(this.productData.LongSleeveTee)
        cartPage.clickGoToPaymentsButton()
        orderPage.fillAllRequiredFields()
        orderPage.clickOrderFinishButton()
        orderPage.checkOrderFinished()
    })

})