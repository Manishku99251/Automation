/// <reference types="Cypress" />

describe("Login Module",function(){



  it("visits the page and login",function(){

      cy.visit('http://www.demo.guru99.com/V4/');

  })

    it('finds the reset button and clicks', function (){

        cy.get('input[type="reset"]').click().then((resetobj)=>{

            expect(resetobj).to.have.value('RESET')
        })
        cy.get('input[type="reset"]').should('have.css','font-family')//.and('match','inherit')

    })

  it('finds the Heading on PageLoad',function(){

    cy.contains('h2','Guru99 Bank')

  })

/*  it('Checks for UserId and Password labels', function(){

      cy.contains('UserID')
      //cy.contains('td','UserID');

      cy.contains('Password')
      //cy.contains('td','password');



  })*/

  it('Checks the Input fields' ,function(){

        cy.get('input[type="text"]').click()




        cy.get('input[type="password"]').click()
      cy.contains('Steps To Generate Access').click()


    })

    it('Checks the Input fields validation labels' ,function(){


        var usernamelabel = Cypress.$('#message23').text()
        var passwordlabel = Cypress.$('#message18').text()
        cy.contains(usernamelabel).should('have.text','User-ID must not be blank')
        cy.contains(passwordlabel).should('have.text','Password must not be blank')

    })

    it('write userId and password' ,function(){



        cy.get('input[type="text"]').as('inputfield').click()
        cy.get('input[type="text"]').click().type("mngr180511")
        cy.get('input[type="password"]').click().type("nYtUgEq")

      /*  cy.get('input[type="text"]').type("mngr180511{enter}")
        cy.get('input[type="password"]').type("nYtUgEq{enter}")*/
        cy.get('@inputfield').type("hello")

    })

/*    it('finds the reset button and clicks', function (){

        cy.get('input[type="reset"]').click().then((resetobj)=>{

            expect(resetobj).to.have.value('RESET')
        })
        cy.get('input[type="reset"]').should('have.css','font-family')//.and('include','san-serif, Veranda, Tahoma')

    })*/

  it('finds the Submit Button and Submits it', function(){

      cy.get('input[type="submit"]').should('have.css','font-family')//.and('match','inherit')


     cy.get('input[type="submit"]').click().then((submitobj)=>{

         //cy.get(obj).should('have.value')
         expect(submitobj).to.have.value('LOGIN')


     })

  })


})

