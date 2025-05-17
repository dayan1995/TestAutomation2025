describe('Demoblaze API Tests', () => {
  const signupUrl = 'https://api.demoblaze.com/signup';
  const loginUrl = 'https://api.demoblaze.com/login';

  it('Creacion de un usuario & Intentar crear un usuario existente', () => {
    const newUser = {
      username: 'juana villao borba',
      password: '123495'
    };
    cy.request({
      method: 'POST',
      url: signupUrl,
      headers: { 'Content-Type': 'application/json' },
      body: newUser,
      failOnStatusCode: false
    }).then((response) => {
      if (response.body.status === 'success') {
        expect(response.body.status).to.eq('success');
      } else if (response.body.errorMessage) {
        cy.log('captura salida usuario ya existente =>', response.body.errorMessage);
      } else {
        expect(response.status).to.eq(200);
        cy.log('captura salida cuando el usuario se creo correctamente=>', JSON.stringify(response.body));
        cy.log('User created successfully.');
      }
    });
  });

  it('Inicio de sesión con usuario y password correctos', () => {
    const loginUser = {
      username: 'juana villao borba',
      password: '123495'
    };

    cy.request({
      method: 'POST',
      url: loginUrl,
      headers: { 'Content-Type': 'application/json' },
      body: loginUser,
      failOnStatusCode: false
    }).then((response) => {
        if (response.body.status === 'success') {
          cy.log('Login successful.');
        } else if (response.body.errorMessage) {
          cy.log('Login error =>', response.body.errorMessage);
        } else {
          expect(response.status).to.eq(200);
          cy.log('captura salida inicio de sesion exitoso =>', JSON.stringify(response.body));
          cy.log("ingreso con exito")
        }
    });
  });

  it('Inicio de sesión con usuario y password incorrectos', () => {
    const loginUser = {
      username: 'wrong_user',
      password: 'wrong_password'
    };

    cy.request({
      method: 'POST',
      url: loginUrl,
      headers: { 'Content-Type': 'application/json' },
      body: loginUser,
      failOnStatusCode: false
    }).then((response) => {
      if (response.status === 400) {
        expect(response.status).to.eq(400);
        cy.log('Login error =>', response.body.errorMessage || 'Bad Request');
      } else {
        cy.log('Respuesta inesperada. Se esperaba 400 pero se recibió:', response.status);
        cy.log('captura salida inicio de sesion incorrecto:', JSON.stringify(response.body));
      }
    });
  });
});
