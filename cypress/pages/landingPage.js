export class landingPage {
  elements = {
    landingUrl: () => cy.url("https://aloware.com"),
    telephone: () => cy.get('a[href="tel:+18552562001"]'),
    titleText: () =>
      cy.title(
        "Top-Rated Contact Center Software | Built For Your Favorite CRM"
      ),
  };

  navbarSolutionsBtn() {
    cy.get('a[href="https://aloware.com/solution/"]');
  }
  navbarFeaturesBtn() {
    cy.get(".three-col > :nth-child(1)");
  }
  navbarIntegrationsBtn() {
    cy.get('a[href="https://aloware.com/integrations/"]');
  }
  navbarPricingBtn() {
    cy.get('a[href="https://aloware.com/pricing/"]');
  }
  navbarAiSmsBtn() {
    cy.get('a[href="https://aloware.com/ai-bot/"]');
  }
  newslettterInput() {
    return cy.get('input[name="email"]');
  }

  newsletterSubmitBtn() {
    return cy.get('input[type="submit"]');
  }

  newsletterFormTitle() {
    return cy.get(".newsletter-form > h3");
  }

  newsletterErrorMessage() {
    return cy.get(".hs-error-msg");
  }

  newsletterSuccessMessage() {
    return cy.get(".submitted-message > p");
  }

  fulfillInputAndSubmitForm(text) {
    this.newslettterInput().type(text);
    this.newsletterSubmitBtn().click();
  }

  validateErrorMessage(expectedText) {
    this.newsletterErrorMessage()
      .should("be.visible")
      .and("contain.text", expectedText);
  }
}
