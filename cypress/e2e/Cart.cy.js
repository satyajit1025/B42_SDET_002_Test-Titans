import { CartFunctionality } from "./Page Object Model/Cartfunctionality";
import { Formsubmission } from "./Page Object Model/FormSubmission";
import { Homepage } from "./Page Object Model/Homepage";

var cart = new CartFunctionality;
var homepage = new Homepage;
var form = new Formsubmission;
describe('Cart functionality check', () => {
    beforeEach(() => {
        homepage.BaseURL();
    });
    it('Add to cart check', () => {
        cart.AddProduct();
    });
    it('Remove Product', () => {
        cart.AddProduct();
        cart.RemoveProduct();
    });
    it('cart total validation', () => {
       cart.CartPrice();
    });
});
describe('WishList Validation', () => {
    beforeEach(() => {
        homepage.BaseURL();
    });
    it('Add to Wishlist without login', () => {
        cart.WishlistWithoutLogin();
    });
    it('Add to wishlist with login', () => {
        form.ValidLogin("satya01@gmail.com","satya123");
        cart.WishlistwithLogin();
    });
});