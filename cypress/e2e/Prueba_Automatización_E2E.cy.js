import HomePage from '../support/HomePage';
import Account_Register from '../support/Account_Register';
import Password_Resets from '../support/Password_Resets';
import Login from '../support/Login';
import Notebooks_Laptops from '../support/Seccion_Notebook';
import Compras from '../support/Compra';



describe('Prueba de Registro', () => {
  const Home = new HomePage();
  const Register = new Account_Register();
  const Resets = new Password_Resets();
  const Log_in = new Login();
  const Notebooks = new Notebooks_Laptops();
  const Compra = new Compras();

  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.intercept('GET', '/service-worker.js', { body: undefined }).as('getServiceWorker');
    Home.visit();
   
  });


  it('Registrar y verificar carga de página', () => {
    Home.Botton_Micuenta();
    Home.Botton_Registre();

    //Proceso de registro 

    Register.Name('Dayan');
    Register.Last_Name('Cherrez');
    Register.Email('juan1006@gmail.com');
    Register.Telephone('0967806994');
    Register.Password('12345');
    Register.Password_Confirm('12345');
    Register.Check()  
    cy.request({
      method: 'POST',
      url: 'https://opencart.abstracta.us/index.php?route=account/register', // baseUrl is prepend to URL
      form: true, // indicates the body should be form urlencoded and sets Content-Type: application/x-www-form-urlencoded headers
      body: {
        customer_group_id: '1',
        firstname: 'Dayan',
        lastname: 'Cherrez',
        email: 'juan1006@gmail.com',
        telephone: '0967806994',
        password: '12345',
        confirm: '12345',
        newsletter: '0',
        agree: '1',

      },
    })
    Register.Continue()

   // Validation login
    Home.Botton_Micuenta();
    Home.Botton_Logout()
    Home.Botton_Micuenta();
    Home.Botton_Login()
    cy.request({
      method: 'POST',
      url: 'https://opencart.abstracta.us/index.php?route=account/login', // baseUrl is prepend to URL
      followRedirect: false, // turn off following redirects
      body: {
        email: 'juan1006@gmail.com',
        password: '12345'
      },
    })
    Log_in.Email('juan1006@gmail.com')
    Log_in.Password('12345') 
    Log_in.Submit()   


     //Seccion Notebook&Latops
    cy.visit('https://opencart.abstracta.us/index.php?route=product/category&path=18');
    Notebooks.Botton_Add_Mac()
    Notebooks.Botton_Search('Samsung Galaxy Tab 10.1')
    cy.visit('https://opencart.abstracta.us/index.php?route=product/search&search=Samsung%20Galaxy%20Tab%2010.1');
    Notebooks.Botton_Search_Tablet()
    cy.visit('https://opencart.abstracta.us/index.php?route=product/product&product_id=49&search=Samsung+Galaxy+Tab+10.1');
    Notebooks.Botton_Add_Tablet()
    Notebooks.Botton_Items()
    Notebooks.Botton_Remove_Items()
    Notebooks.Botton_Add_Tablet()
    Notebooks.Botton_Items()
    Notebooks.Botton_Checkout()
   
      
        //Compra Notebook
      cy.request({
        method: 'POST',
        url: 'https://opencart.abstracta.us/index.php?route=checkout/checkout',
        form: true, // indicates the body should be form urlencoded and sets Content-Type: application/x-www-form-urlencoded headers
        body: {
          firstname: 'juana',
          lastname: 'borbor',
          company: 'municipio',
          address_1: 'simon bolivar',
          address_2: 'via daule',
          city: 'guayaquil',
          postcode: '123456789',
          country_id: '222',
          zone_id: '3528'
        },
      })
      Compra.First_Name('juana')
      Compra.Last_Name('borbor')
      Compra.Company('municipio')
      Compra.Adress1('simon bolivar')
      Compra.Adress2('via daule')
      Compra.City('guayaquil')
      Compra.Post_Code('123456789')
      Compra.Region()
      Compra.Continue()
      Compra.Continue_Delivery()
      Compra.Continue_Method()
      Compra.Check_Box()
      Compra.Continue_Payment_Method()
      Compra.Button_Confirm()
      cy.visit('https://opencart.abstracta.us/index.php?route=checkout/success')
      cy.reload(true)
     
   
      cy.request({
        method: 'GET',
        url: 'https://opencart.abstracta.us/index.php?route=checkout/checkout/country&country_id=222', // baseUrl is prepend to URL
        form: true, // indicates the body should be form urlencoded and sets Content-Type: application/x-www-form-urlencoded headers
        body: {
          route: 'checkout/checkout/country',
          country_id: '222'
        },
      })
  });
});

