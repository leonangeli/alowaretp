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
    //cy.get('a[href="https://aloware.com/features/"]');
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
    cy.get('input[name="email"]');
  }
  newsletterSubmitBtn() {
    cy.get('input[type="submit"]');
  }
}
