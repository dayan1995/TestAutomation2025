require('cypress-xpath');

class Notebooks_Laptops {

  Botton_Add_Mac(){
    cy.xpath("(//span[contains(@class,'hidden-xs hidden-sm hidden-md')])[10]").click({force:true})
  }

  Botton_Search(search){
    cy.xpath("//input[contains(@type,'text')]").type(search)
  }

  Botton_Search_Tablet(){
    cy.xpath("//button[contains(@class,'btn btn-default btn-lg')]").click()
  }

  Botton_Add_Tablet(){
    cy.xpath("//button[contains(.,'Add to Cart')]").click()
  }

  Botton_Items(){
    cy.get("#cart-total").click()
  }

  Botton_Remove_Items(){
    cy.xpath("(//i[contains(@class,'fa fa-times')])[1]").click()
  }

  Botton_Shopping_car(){
    cy.xpath("//a[contains(@title,'Shopping Cart')]").click()
  }
  Botton_Checkout(){
    cy.xpath("//strong[contains(.,'Checkout')]").click({force:true})
  }
 

 



  
}

export default Notebooks_Laptops;
