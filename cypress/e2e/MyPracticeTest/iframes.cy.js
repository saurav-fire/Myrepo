
describe("iframes",()=>
{

 it('Iframes',()=>
 {
  cy.visit("https://www.webdriveruniversity.com/IFrame/index.html");
  cy.get("#nav-title").should('be.visible');



  cy.get('#frame').then($iframe => {
    const $body = $iframe.contents().find('body');
    cy.wrap($body).as('iframeBody');
  });
  cy.get('@iframeBody').find("a[href='products.html']").click();






});
 });


