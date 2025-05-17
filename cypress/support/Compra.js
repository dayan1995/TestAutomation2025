require('cypress-xpath');

class Compras {

    First_Name(name){
        cy.get('#input-payment-firstname').type(name)
    }
    Last_Name(lastname){
        cy.get('#input-payment-lastname').type(lastname)
    }
    Company(company){
        cy.get('#input-payment-company').type(company)
    }
    Adress1(adress1){
        cy.get('#input-payment-address-1').type(adress1)
    }
    Adress2(adress2){
        cy.get('#input-payment-address-2').type(adress2)
    }
    Post_Code(code){
        cy.get('#input-payment-postcode').type(code)
    }
    City(city){
        cy.get('#input-payment-city').type(city)
    }
    Country(country){
        cy.get('#input-payment-postcode').type(country)
    }
    Region(){
        cy.get('#input-payment-zone').select('Aberdeenshire')      // 3514 Selecciona la opción por su valor
    }
    Continue(){
        cy.get('#button-payment-address').click()
    }
    Continue_Delivery(){
        cy.xpath("//input[contains(@id,'button-shipping-address')]").click()
    }
    Continue_Method(){
        cy.get('#button-shipping-method').click()
    }
    Check_Box(){
        cy.xpath("//input[contains(@type,'checkbox')]").click()
    }
    Continue_Payment_Method(){
        cy.get('#button-payment-method').click()
    }
    Button_Confirm(){
        cy.get('#button-confirm').click()
    }
  
  
}
  
export default Compras;
