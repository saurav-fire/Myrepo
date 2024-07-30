

describe('Hooks',function(){

before(()=>{

cy.log("before hook")



})

beforeEach(()=>{

    cy.log("before eachhook")
    
    
    
    })
it('second it block',()=>{


cy.log(" second program")



})
it('first it block ',()=>{


    cy.log(" first program")
    
    
    
    })
    it('third it block ',()=>{


        cy.log(" third  program")
        
        
        
        })


    after(()=>{
        cy.log("after hook")
    })


    afterEach(()=>{

  cy.log("aftereach")

    })



})