describe('Handle Prompt Alert', () => {
    it('should handle a prompt dialog', () => {
      cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
  
      // Stub the window.prompt method
      cy.window().then((win) => {
        cy.stub(win, 'prompt').returns('welcome'); // Change 'default value' to what you want to provide
      });
  
      // Perform the action that triggers the prompt
      cy.get("button[onclick='jsPrompt()']").click();
  
      // Continue with your test...
    });
  });
  