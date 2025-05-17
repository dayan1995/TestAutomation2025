
require('cypress-xpath');

class Password_Resets {

  Password(password) {
    cy.get("#input-password").type(password);
  }

  Password_Resets(password_resets) {
    cy.get("#input-confirm").type(password_resets);
  }
  
  Continue(){
    cy.xpath("//input[contains(@type,'submit')]").click()
  }

  Page_Reset_password(){
    cy.xpath("(//a[contains(.,'Password')])[1]").click()
  }
  }
  
  export default Password_Resets;
  