import { Homepage } from "./Page Object Model/Homepage";

var homepage = new Homepage;
describe('Home Page functionality check', () => {
    it('Validate the navigation on home page', () => {
        homepage.BaseURL();
    });
});