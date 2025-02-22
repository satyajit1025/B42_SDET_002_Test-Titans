import { Homepage } from "./Page Object Model/Homepage";
import { ProductPage } from "./Page Object Model/ProductPage";

var product = new ProductPage;
var homepage = new Homepage;
describe('Product Page Validation', () => {
    beforeEach(() => {
        homepage.BaseURL();
    });
    it('Product listing check', () => {
       product.VisitProduct();
       product.VisibilityCheck();
       product.ProductListinCheck();
    });
    it('Filter option check', () => {
        product.productFilter();
    });
});