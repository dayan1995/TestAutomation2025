const { defineConfig } = require("cypress");
const mochawesome = require('cypress-mochawesome-reporter/plugin');


module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      return config;
    },
    chromeWebSecurity: false,  // Deshabilitar la seguridad web de Chrome si es necesario
    pageLoadTimeout: 13000,
    reporter: 'cypress-mochawesome-reporter', // Asegúrate de que el reporter esté configurado correctamente
    reporterOptions: {
      reportDir: 'cypress/reports/html',
      overwrite: false,
      html: false,
      json: true,
    },

  },
});
