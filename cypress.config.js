import { defineConfig } from "cypress";

export default defineConfig({
  
  e2e: {
    baseUrl: 'https://www.youngliving.com/es_CR',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
