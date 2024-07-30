


describe('MyTest', function()
{
  it("firstTest", function()

{
 cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
// cy.get("cy.get('.oxd-text--h5')").should('be.visible');
 cy.get("input[placeholder='Username']").type("Admin");
 cy.get("input[type='password']").type("admin123");
 cy.get("button[type='submit']").click();
 cy.get('.oxd-main-menu-search > .oxd-icon-button').click
 


})

}
)