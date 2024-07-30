describe('Alerts',()=>
{

 it('jacascirptAlerts',()=>

{

cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
cy.get("button[onclick='jsAlert()']").click();
cy.get('#result').should('have.text','You successfully clicked an alert');

})

it('jacascirptAlerts',()=>

    {
    
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    cy.get("button[onclick='jsConfirm()']").click();
    cy.on('window:confirm',(t)=>
    {

      expect(t).to.contains('I am a JS Confirm');

    })
   
    cy.get('#result').should('have.text','You clicked: Ok');
    
    })

    it('jacascirptAlertscancel',()=>

        {
        
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
        cy.get("button[onclick='jsConfirm()']").click();
        cy.on('window:confirm',()=> false);
        
     cy.get('#result').should('have.text',"You clicked: Cancel");
    })

    
                                 
      
    })
      
   
  
