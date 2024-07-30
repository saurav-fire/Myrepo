describe('clickButton',()=>
{

it('validate buttons ',()=>
{
 cy.visit("https://www.webdriveruniversity.com/Click-Buttons/index.html");
 cy.wait(2000);
 cy.get("#button1").click({force:true});

})

})