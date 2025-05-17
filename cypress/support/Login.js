
require('cypress-xpath');

class Login {

  Email(email) {
    cy.xpath("//input[contains(@id,'input-email')]").type(email);
  }

  Password(password) {
    cy.get("#input-password").type(password);
  }
  
  Submit(){
    cy.xpath("//input[contains(@type,'submit')]").click()
  }

  Continue(){
    cy.xpath("//a[contains(@class,'btn btn-primary')]").click()
  }

  }
  
  export default Login;
  