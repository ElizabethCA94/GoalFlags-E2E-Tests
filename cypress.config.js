const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  defaultCommandTimeout: 30000,
  responseTimeout: 30000,
  execTimeout: 30000,
  taskTimeout: 30000,
  requestTimeout: 30000,
  pageLoadTimeout: 30000,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
