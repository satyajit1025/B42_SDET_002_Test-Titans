import { Homepage } from "./Page Object Model/Homepage";
import { Responsive } from "./Page Object Model/Responsivness";

var homepage = new Homepage
var res = new Responsive
describe('', () => {
    beforeEach(() => {
        homepage.BaseURL();
    });
    it('Mobile Screen', () => {
        res.MobileScreen();
    });
    it('Tablet Screen', () => {
        res.TabletScreen();
    });
    it('Desktop Screen', () => {
        res.DesktopScreen();
    });
});