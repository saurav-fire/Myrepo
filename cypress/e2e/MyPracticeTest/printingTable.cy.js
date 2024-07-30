describe('Mytable',()=>
{

     it('getting data from table',()=>
     {
        // printing only headers
        cy.visit("https://the-internet.herokuapp.com/tables");
        cy.get("#table1>thead>tr>th").each(($el, index,$list)=>{
        cy.log("Index"+ index +" : " +$el.text())
        })
     })


})