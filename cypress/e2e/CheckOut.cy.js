import { CartFunctionality } from "./Page Object Model/Cartfunctionality";
import { Checkout } from "./Page Object Model/Checkout";
import { Homepage } from "./Page Object Model/Homepage";

var chekout = new Checkout;
var homepaege = new Homepage;
var cart = new CartFunctionality;
describe('Checkout process validation', () => {
    beforeEach(() => {
        homepaege.BaseURL();
    });
    it('checkout process check', () => {
        cart.AddProduct();
        chekout.ClickCheckout();
        chekout.fillform("Satya","Sahu","54894564","Satya@gmail.com");
        chekout.AdressFill("Banarpal","Banarpal","Angul","Odisha","751288");
        chekout.Payment();
        chekout.DetailsView();
        chekout.confirm();
    });
});