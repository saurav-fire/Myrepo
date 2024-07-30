

describe('selectdropdowns',()=>

{

 it('selectdropdown',()=>
{

    cy.visit("https://www.geodatasource.com/software/country-region-dropdown-menu-demo");
    cy.get(':nth-child(1) > .portlet-body > .form-horizontal > :nth-child(1) > .col-sm-10 > .form-control').select("Argentina");

})

it('Bootstrap dropdownwithout_select',()=>
{

cy.visit("https://www.wikipedia.org/");
cy.get("#searchInput").type("india")
cy.get(".suggestions-dropdown>a").contains(" national cricket team").click();

})

it.only("dynamicdropdown",()=>
{
 cy.visit("https://www.google.com/");
 cy.get("#APjFqb").type("india");
 cy.get("div.G43f7e>li>div").each(($el,index,$list) =>
{

if  ($el.text()=='indiaMART')
{
 cy.wrap($el).trigger('click');

}

})
})
}
)