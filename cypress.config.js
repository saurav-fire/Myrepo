const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'qtz94a',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
