
/// <reference types="cypress-xpath" />
describe('Interactionwithelements',()=>
{
 it('Mytestradio',()=>
{

    // select buttons 
  cy.visit("https://artoftesting.com/samplesiteforselenium");
  cy.get("input[value='Automation']").check().should('be.checked')
  cy.wait(4000);
  cy.get("input[value='Automation']").uncheck().should('not.be.checked');
})

it('Mytestradio1',()=>
    {
    
        // select all checkboxes
      cy.visit("https://artoftesting.com/samplesiteforselenium");
     cy.get("input[type='checkbox']").first().check().should('be.checked');
    })
    
    it('firstcheckboxselect',()=>
        {
        
            // select all checkboxes
          cy.visit("https://artoftesting.com/samplesiteforselenium");
         cy.get("input[type='checkbox']").first().check().should('be.checked');
        })
        

        it('lastcheckboxselect',()=>
            {
            
                // select all checkboxes
              cy.visit("https://artoftesting.com/samplesiteforselenium");
             cy.get("input[type='checkbox']").last().check().should('be.checked');
            })
            it.only('selectcheckboxusingNumber',()=>
                {
                
                    // select all checkboxes
                  cy.visit("https://artoftesting.com/samplesiteforselenium");
                 cy.get("input[type='checkbox']").eq(1).check().should('be.checked');
                })
    

})