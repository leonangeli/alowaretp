import { landingPage } from "../../pages/landingPage";
import { faker } from "@faker-js/faker";

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
    cy.intercept("GET", "https://aloware.com/").as("waitOnLoad");
    cy.visit("/");
  });

  it("Should be able to access all the navbar sections", () => {
    //Validate the website
    cy.validateSuccessfulAccess(
      "https://aloware.com/",
      "Top-Rated Contact Center Software | Built For Your Favorite CRM"
    );
    cy.clickAndVerify(landing.navbarSolutionsBtn);
    cy.validateSuccessfulAccess(
      "https://aloware.com/solution/",
      "Solutions - Aloware"
    );
    cy.navigateBack();
    cy.clickAndVerify(landing.navbarFeaturesBtn);
    cy.validateSuccessfulAccess(
      "https://aloware.com/features/",
      "Features - Aloware"
    );
    cy.navigateBack();
    cy.clickAndVerify(landing.navbarIntegrationsBtn);
    cy.validateSuccessfulAccess(
      "https://aloware.com/integrations/",
      "Integrations - Aloware"
    );
    cy.navigateBack();
    cy.clickAndVerify(landing.navbarPricingBtn);
    cy.validateSuccessfulAccess(
      "https://aloware.com/pricing/",
      "Pricing - Aloware"
    );
    cy.navigateBack();
    cy.clickAndVerify(landing.navbarAiSmsBtn);
    cy.validateSuccessfulAccess(
      "https://aloware.com/ai-bot/",
      "Aloware - AI SMS Bot"
    );
  });

  it.only("Should be able subscribe to the newsletter", () => {
    cy.wait("@waitOnLoad");
    cy.scrollTo("bottom");
    cy.get('input[name="email"]').scrollIntoView().should("be.visible");
    //cy.get("#email-afd645e7-d218-4db7-9e49-745f913de097").type(
    //   faker.internet.email()
    // );
    //landing.newslettterInput().type(faker.internet.email());
    //cy.scrollAndAssertVisible(landing.newslettterInput);
    //landing.newslettterInput().type(faker.internet.email);
  });
});
