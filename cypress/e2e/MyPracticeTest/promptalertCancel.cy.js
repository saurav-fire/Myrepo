describe('Handle Prompt Dialog', () => {
    it('should handle prompt dialog with Cancel', () => {
      // Visit your application page
      cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
  
      // Stub the window.prompt method to simulate the Cancel action
      cy.window().then((win) => {
        cy.stub(win, 'prompt').returns(null); // Simulate clicking Cancel by returning null
      });
  
      // Perform the action that triggers the prompt dialog
      cy.get("button[onclick='jsPrompt()']").click();
  
      // Continue with your test assertions or actions
      // You might want to check if the result of the Cancel action is handled correctly
    //  cy.get('result-selector').should('not.contain', 'expected result after cancel');
    });
  });
  