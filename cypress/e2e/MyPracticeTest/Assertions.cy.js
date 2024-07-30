

describe('MyAssertions',()=>
{
 it('MyfirstAssertion_Impilicit', ()=>
 {
  //should  
    // and both are implicit assertions 
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login').and('contains','orangehrm')
    .should('include','oran');
    


 })
 it('MyfirstAssertion_Impilicit', ()=>
    {
     //should  
       // and both are implicit assertions 
       cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
       cy.url().should('not.eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login').and('contains','orangehrm')
       .should('not.include','oran');
       
   
   
    })
   

 it('Explicit positive',function()
 {
  
 let expectedname = "Login";
 cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
 cy.get(".oxd-text.oxd-text--h5.orangehrm-login-title").then((x)=>
 {

   let actualname = x.text();
   //expect(actualname).to.equal(expectedname);

   assert.equal(actualname,expectedname);
 })
 })


 it.only('Explicit negative',function()
 {
  
 let expectedname = "Logn";
 cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
 cy.get(".oxd-text.oxd-text--h5.orangehrm-login-title").then((x)=>
 {

   let actualname = x.text();
  // expect(actualname).to.not.equal(expectedname);

   assert.notEqual(actualname,expectedname);
 })
 })
 
}
)