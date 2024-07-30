

describe("DDT",()=>{
it('register a user ',()=>
{
 
      cy.fixture('testData').then((data)=>{
    cy.visit("https://demo.nopcommerce.com/login?returnUrl=%2F");
    cy.get(".button-1.register-button").click();
    cy.get("#gender-male").check();
    cy.get("input[name='FirstName']").type(data.username);
    cy.get("input[name='LastName']").type(data.password);

      })
    cy.get("select[name='DateOfBirthDay']").select("30");
    cy.get("select[name='DateOfBirthMonth']").select("December");
    cy.get("select[name='DateOfBirthYear']").select("1996");
    cy.get("#Email").type("math123@gmail.com");






})


})