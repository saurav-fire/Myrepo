

describe("mytable", ()=>
{
// checking index data and printing the index
it('the test to print data', ()=>
{

  cy.visit("https://the-internet.herokuapp.com/tables");
  cy.get("#table1>thead>tr>th").each(($el , index , $list) =>
    {
    let mtext =$el.text();
    if(mtext=='Email')
    {
        cy.log("Found email on this index " +( index + 1))
    }
  
    })

  cy.get("#table1>tbody>tr").then(($el , index , $list) =>
  {
    cy.log($el.text());

  })

})

})