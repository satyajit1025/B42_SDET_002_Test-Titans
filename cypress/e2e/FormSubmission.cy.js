import { Formsubmission } from "./Page Object Model/FormSubmission";
import { Homepage } from "./Page Object Model/HomePage";

var homepage = new Homepage
var form = new Formsubmission
describe('SigUp Validation', () => {
    beforeEach(() => {
        homepage.BaseURL()
    });
    it('Valid Sign Up check', () => {
        form.ValidSignup("satya","satya5@gmail.com","satya123")
    });
    it('dupicate signup check', () => {
        form.DupicateSignup("satya","satya5@gmail.com","satya123")
    });
});
describe('Login Validation', () => {
    beforeEach(() => {
        homepage.BaseURL();
    });
    it('valid login check', () => {
        form.ValidLogin("satya2@gmail.com","satya123")
    });
    it('invalid login check', () => {
        form.InvalidLogin("satya2@gmail.com","satya1234")
    });
    it('logout', () => {
        form.Logout("satya2@gmail.com","satya123")
    });
});