describe('Nominal News', () => {
    beforeEach(() => {
        cy.intercept('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=0KvctpdTAg881oZKdN9U4UEpfYSQA9am', {fixture: 'news.json'})
        cy.visit('http://localhost:3000/')
    })

    it('Should have a title', () => {
        cy.get('[data-cy=title]').contains('Nominal News')
    })

    it('Should show news articles', () => {
        cy.get('[data-cy=list-title]').contains('How to Build Trust')
    })

    it('Should allow the user to click on an article to see a detailed view', () => {
        cy.get('[data-cy=list-title]').contains('How to Build Trust').click()
        cy.url().should('eq', 'http://localhost:3000/How_to_Build_Trust:_A_Practical_Guide')
        cy.get('[data-cy=by]').contains('David Brooks')
        cy.get('[data-cy=abstract]').contains('Not only do people need to behave with integrity and benevolence, they need to develop the skills to make people feel respected and safe.')
    })

    it('Should allow the user to go back to the previous page', () => {
        cy.get('[data-cy=list-title]').contains('How to Build Trust').click()
        cy.get('[data-cy=back-button]').click()
        cy.url().should('eq', 'http://localhost:3000/')
    })

    it('Should allow a user to search articles by title', () => {
        cy.get('[data-cy=search]').type('Bill Bratton')
        cy.get('[data-cy=list-title]').should('not.contain', 'Trust')
        cy.get('[data-cy=list-title]').contains('Root for the Bad Guys')
    })

    it('Should allow a user to clear their search to see all of the articles', () => {
        cy.get('[data-cy=search]').type('Bill Bratton')
        cy.get('[data-cy=search').should('have.value', 'Bill Bratton')
        cy.get('[data-cy=list-title]').should('not.contain', 'Trust')
        cy.get('[data-cy=list-title]').contains('Root for the Bad Guys')
        cy.get('[data-cy=show-all]').click()
        cy.get('[data-cy=search').should('have.value', '')
        cy.get('[data-cy=list-title]').contains('Bill Bratton')
        cy.get('[data-cy=list-title]').contains('Trust')
        
    })
})