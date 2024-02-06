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
  },
});
