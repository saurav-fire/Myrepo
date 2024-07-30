
describe('drag',()=>
{

    it.only('drag and drop', ()=>
        {
         cy.visit("https://the-internet.herokuapp.com/drag_and_drop");
      
         const dataTransfer = new DataTransfer();

         cy.get('#column-a') // Selector for the element to be dragged
           .trigger('dragstart', { dataTransfer });
     
         cy.get('#column-b') // Selector for the drop target element
           .trigger('drop', { dataTransfer })
           .trigger('dragend', { dataTransfer });
      
        
        
        });

});