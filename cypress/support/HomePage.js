// cypress/support/pageObjects/Homepage.js
// cypress/support/index.js
require('cypress-xpath');


class HomePage {
  visit() {
    cy.visit('https://opencart.abstracta.us');
  }


  Botton_Micuenta() {
    cy.contains('My Account').click();

  }

  Botton_Registre() {
    cy.xpath("//a[contains(.,'Register')]").click();
  }

  Botton_Logout(){
    cy.xpath("(//a[contains(.,'Logout')])[1]").click()
    cy.wait(2000)
  }

  Botton_Login(){
    cy.xpath("(//a[contains(.,'Login')])[1]").click()
  }

  

}

export default HomePage;
