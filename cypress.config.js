const { defineConfig } = require("cypress");

module.exports = defineConfig({

    //ustawienie okna przeglądarki
    viewportHeight:800, 
    viewportWidth:1200,

  e2e: {
    // baseUrl: 'https://simpletestsite.fabrykatestow.pl/'
    baseUrl: 'https://tapsshop.pl'


    // setupNodeEvents(on, config) {
    //   // implement node event listeners here
    // },
  }
});
