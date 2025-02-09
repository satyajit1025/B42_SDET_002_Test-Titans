import { Formsubmission } from "./Page Object Model/FormSubmission";
import { Homepage } from "./Page Object Model/Homepage";


var homepage = new Homepage
var form = new Formsubmission
describe('SigUp Validation', () => {
    beforeEach(() => {
        homepage.BaseURL();
    });
    it('Valid Sign Up check', () => {
        form.ValidSignup("satya","satya01@gmail.com","satya123");
    });
    it('dupicate signup check', () => {
        form.DupicateSignup("satya","satya01@gmail.com","satya123");
    });
});
describe('Login Validation', () => {
    beforeEach(() => {
        homepage.BaseURL();
    });
    it('valid login check', () => {
        form.ValidLogin("satya01@gmail.com","satya123");
    });
    it('invalid login check', () => {
        form.InvalidLogin("satya@gmail.com","satya1234");
    });
    it('logout', () => {
        form.Logout("satya01@gmail.com","satya123");
    });
});