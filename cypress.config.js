const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    overwrite: 'false',
    reportFilename: '[status]_[datetime]-[name]-report',
    timestamp: 'longDate',
    charts: 'true',
    reportDir: 'cypress/reports',
    saveJson: 'false',
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    baseUrl: 'https://blue-bite-dev-3.bluebite.io/04425f7c-4fdd-47f6-85b3-b800d12bb9ca',
  },
});
