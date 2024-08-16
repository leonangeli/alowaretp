import { landingPage } from "../../pages/landingPage";
import { faker } from "@faker-js/faker";
import { SUPP } from "../../support/constants";
const landing = new landingPage();

describe("Landing page tests", () => {
  Cypress.on(
    "uncaught:exception",
    () =>
      // Returning false here prevents Cypress from failing the test on the unhandled app exception
      // Ideally would fix app exception long-term
      false
  );
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should be able to access all the navbar sections", () => {
    //Validate successful access to the landing page by asserting the title
    cy.validateSuccessfulAccess(
      SUPP.landingUrl,
      "Top-Rated Contact Center Software | Built For Your Favorite CRM"
    );
    //Validate every clickable button in the navbar works by clicking it and asserting its title
    cy.clickAndVerify(landing.navbarSolutionsBtn);
    cy.validateSuccessfulAccess(SUPP.SolutionsUrl, "Solutions - Aloware");
    cy.navigateBack();
    cy.clickAndVerify(landing.navbarFeaturesBtn);
    cy.validateSuccessfulAccess(SUPP.featuresUrl, "Features - Aloware");
    cy.navigateBack();
    cy.clickAndVerify(landing.navbarIntegrationsBtn);
    cy.validateSuccessfulAccess(SUPP.integrationsUrl, "Integrations - Aloware");
    cy.navigateBack();
    cy.clickAndVerify(landing.navbarPricingBtn);
    cy.validateSuccessfulAccess(SUPP.pricingUrl, "Pricing - Aloware");
    cy.navigateBack();
    cy.clickAndVerify(landing.navbarAiSmsBtn);
    cy.validateSuccessfulAccess(SUPP.aiBotUrl, "Aloware - AI SMS Bot");
  });

  it("Shoould show an error message when the newsletter form is fullfilled with a @gmail or @hotmail email ", () => {
    //Scroll to the bottom of the landing page where the newsletter form is located
    cy.scrollTo("bottom");
    //Verify the presence of the form elements
    cy.clickAndVerify(landing.newsletterFormTitle);
    cy.clickAndVerify(landing.newslettterInput);
    //Fulfill the form with an invalid email
    landing.fulfillInputAndSubmitForm(faker.internet.email());
    //Validate the error message text by comparing it
    cy.validateText(
      landing.newsletterErrorMessage,
      "Please enter a different email address. This form does not accept addresses from"
    );
  });

  it("Should be able to subscribe to the newsletter successfully ", () => {
    const email = Cypress.env("EMAIL");
    //Scroll to the bottom of the landing page where the newsletter form is located
    cy.scrollTo("bottom");
    //Verify the presence of the form elements
    cy.clickAndVerify(landing.newsletterFormTitle);
    cy.clickAndVerify(landing.newslettterInput);
    //Fulfill the form with a valid email
    landing.fulfillInputAndSubmitForm(email);
    //Validate the success message text by comparing it
    cy.validateText(
      landing.newsletterSuccessMessage,
      "Thanks for subscribing to our newsletter."
    );
  });
});
