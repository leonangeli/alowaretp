const { defineConfig } = require("cypress");

module.exports = defineConfig({
  failOnStatusCode: false,
  e2e: {
    experimentalSessionAndOrigin: true,
    //pageLoadTimeout: 120000,
    chromeWebSecurity: false,
    reporter: "cypress-mochawesome-reporter",
    baseUrl: "https://aloware.com",
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
    },
    specPattern: "cypress/tests/ui/**/*.spec.js",
  },
});
