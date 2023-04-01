// import {Product} from "./shopPage";

const productName = '.product-name'
const removeItemButton = '.remove'
const emptyCartAlert = 'p[class="cart-empty woocommerce-info"]'
// sprawdzam przycisk Przejdź do płatności
const goToPaymentsButton = '.wc-proceed-to-checkout'

class CartPage{
    checkThatAddedProductIsInCart(product){
        //sprawdzamy czy produkt został poprawnie dodany do koszyka
        // cy.get(productName).contains(Product.HoodieWithZipper.Name).should('exist')
        cy.get(productName).contains(product.Name).should('exist')
    }

    removeItemFromCart() {
        cy.get(removeItemButton).click()
    }
    
    checkThatCartIsEmpty() {
        cy.get(emptyCartAlert).should('exist')
    }

    clickGoToPaymentsButton(){
        cy.get(goToPaymentsButton).click()
    }
}

export default CartPage;