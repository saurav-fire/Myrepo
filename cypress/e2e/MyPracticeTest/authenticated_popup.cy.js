describe("authenticated pop up", ()=>

    {
    it('user should login to authenticatedpop up', ()=>
    {

     cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth")

    })

    it('sending username and password in json format', ()=>
        {
    
         cy.visit("https://the-internet.herokuapp.com/basic_auth"
            ,{
                auth:{
                    username:"admin",
                    password:"admin"
                }
            }
         )
    
        })
    



    })