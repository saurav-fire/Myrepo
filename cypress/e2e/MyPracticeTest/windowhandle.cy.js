
describe('Mytest',()=>{

    it('test',()=>{

        cy.visit("https://the-internet.herokuapp.com/windows");

        cy.get('.example > a').invoke('removeAttr','target').click();
        cy.get("div[class='example'] h3").should('have.text','New Window');
        


    
  });
    })
  
