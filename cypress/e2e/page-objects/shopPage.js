
import Urls from "./urls";


//metody use in class HomePage - click po headerach aby przetestować konkretną kontrolkę, funkcję strony
const myAccountHeaderButton = '#menu-item-100' 
const dataBlockNameNew = 'div[data-block-name="woocommerce/product-new"]'
const checkCartFromProductLevel = '.added_to_cart.wc-forward'


// export const Product = {
//     HoodieWithZipper: {
//         Locator:'a[data-product_id="51"]',
//         Name:'Hoodie with Zipper'

//     },
//     Polo: {
//         Locator:'a[data-product_id="53"]',
//         Name:'Polo'
//     },
//     Sunglasses: {
//         Locator:'a[data-product_id="49"]',
//         Name:'Sunglasses'
//     }
// }



class ShopPage{
   
    //piszemy metodę - kliknięcia w moje konto
    clickMyAccountHeaderButton()  {
        cy.get(myAccountHeaderButton).click()        
    }

    addProductToCart(product) {
        //within wchodzimy do Sekcji Nowe
        cy.get(dataBlockNameNew).within(() =>{
            // cy.get(Product.HoodieWithZipper.Locator).click()
            cy.get(product.Locator).click()
        })
    }

    //przechodze do koszyka przez kliknięcie przycisku z poziomu produktu, który do niego dodałem
    clickGoToCartFromProductButton() {
        cy.get(dataBlockNameNew).within(() =>{
           cy.get(checkCartFromProductLevel).click()
            
        })
    }


    visitPage() {
        const url = new Urls()
        url.visitShopPage()
    }


    
}
//aby móc uzywać metody visitPage
export default ShopPage;