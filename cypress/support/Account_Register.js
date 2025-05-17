require('cypress-xpath');

class Account_Register {
    Name(name) {
      cy.xpath("//input[contains(@id,'input-firstname')]").type(name);
    }
  
    Last_Name(last_name) {
      cy.xpath("(//input[contains(@type,'text')])[3]").type(last_name);
    }
  
    Email(email) {
      cy.xpath("//input[contains(@id,'input-email')]").type(email);
    }
  
    Telephone(telephone) {
      cy.xpath("//input[contains(@id,'input-telephone')]").type(telephone);
    }
  
    Password(password) {
      cy.get("#input-password").type(password);
    }

    Password_Confirm(password_repeat) {
      cy.get("#input-confirm").type(password_repeat);
    }

    Check(){
      cy.xpath("//input[contains(@type,'checkbox')]").click()
    }

    Continue(){
      cy.get('.btn.btn-primary').click(); // Haz clic en el botón ignorando restricciones

    }

  
  }
  
  export default Account_Register;
  