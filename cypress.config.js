const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout: 10000,
    specPattern: "cypress/e2e/specs/**/*.cy.js", // apenas testes normais
  },
});

module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        closeTab(url) {
          const page = browser.pages().find(p => p.url() === url);
          if (page) {
            page.close();
          }
          return null;
        },
      });
    },
  },
};
