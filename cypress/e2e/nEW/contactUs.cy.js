

describe('Contsctus',()=>
{
it('clicking on contact Us',function()
{
    cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html");
 //   cy.get("#contact-us").click();
    cy.get("h2[name='contactme']").should('be.visible');
    cy.get("[name='first_name']").type("saurav");
    cy.get("[name=last_name]").type("bhai");
    cy.get("[name='email']").type("myemail@gmail.com");
    cy.get("[name='message']").type("this is best website you are doing great job god bless u");
    cy.get("input[value='SUBMIT']").click();
})
})