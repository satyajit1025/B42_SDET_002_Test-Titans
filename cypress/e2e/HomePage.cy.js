import { Homepage } from "./Page Object Model/HomePage";

var homepage = new Homepage
describe('Home Page functionality check', () => {
    beforeEach(() => {
        homepage.BaseURL();
    });
    it('Validate the header navigation on homepage', () => {
        homepage.HeadeURLs();
    });
    it('Validate the footer naviagtion on the homepage', () => {
        homepage.FooterLink1();
    });
});