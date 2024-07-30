
describe('scrollintoView',()=>
{
it('scrllview',()=>
{

    cy.visit("https://the-internet.herokuapp.com/");
    cy.get("a[href='/tinymce']").scrollIntoView({duration:5000});

})

})