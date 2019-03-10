/*describe('Loads the Manager Profile Page', function (){

    it('loads the logged in user page', function () {

        cy.visit("http://www.demo.guru99.com/V4/manager/Managerhomepage.php")
    })

})*/

//alias
describe('parent', function () {
    beforeEach(function () {
        cy.wrap('one').as('a')
    })

    context('child', function () {
        beforeEach(function () {
            cy.wrap('two').as('b')
        })

        describe('grandchild', function () {
            beforeEach(function () {
                cy.wrap('three').as('c')
            })

            it('can access all aliases as properties', function () {
                expect(this.a).to.eq('one')   // true
                expect(this.b).to.eq('two')   // true
                expect(this.c).to.eq('three') // true
            })
        })
    })
})
