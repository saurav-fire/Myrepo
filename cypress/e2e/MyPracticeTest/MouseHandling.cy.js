describe("mouseover elements", ()=>
{

 it('mouse hover to specific element', ()=>
{

    cy.visit("https://demo.opencart.com/");
    
    cy.get(".nav-link.dropdown-toggle[href='https://demo.opencart.com/en-gb/catalog/desktops']").trigger("mouseover").click();
})

it("ondblclick", ()=>
{
  cy.visit("https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_ondblclick");
  cy.get("#iframeResult").then(($iframe) =>{
 const $body = $iframe.contents().find('body');
 cy.wrap($body).as('iframeBody');



  })
  cy.get('@iframeBody').find("p[ondblclick='myFunction()']").dblclick();
 // cy.get("p[ondblclick]").trigger('dblclick');



})


it('right click', ()=>
{
 cy.visit("https://practice.expandtesting.com/context-menu");
 cy.get("#hot-spot").trigger('contextmenu');

})


})