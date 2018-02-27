describe("cocktail app", () => {
    it ("Works", () => {
        cy.visit("/")

        cy.get("#splash-body > header")
        .should("have.text", "Cocktail=>")

        cy.get("#splash > img")
        .should("be.visible")

        cy.get("#splash > p")
        .should("be.visible")

        cy.get("#splash > button")
        .should("be.visible").click()

        cy.get("#main-header")
        .should("have.text", "Cocktail=>")

        cy.get("#drink-box")
        .should("be.visible").and("have.class", "box")

        cy.get("#camera-logo")
        .should("be.visible")

        cy.get("#recipe-box")
        .should("be.visible").and("have.class", "box")

        cy.get("#recipe-logo")
        .should("be.visible")

        cy.get("#recipe-box > div > h2")
        .should("have.text", "Recipe")

        cy.get("#search-form")
        .should("be.visible").and("have.class", "box-header")

        cy.get("#by-name").type("vesper")

        cy.get("#name-form").submit()

        cy.get(".drink")
        .should("have.length", 1)

        cy.get(".drink > button").click()

        cy.get("#ingredients-list")
        .should("be.visible")

        cy.get("#by-ingredient").type("lemon")

        cy.get("#ingredients-form").submit()

        cy.get(".drink")
        .should("have.length.gt", 1)

        cy.get(".drink > button").eq(0).click()

        cy.get("#recipe-unavailable")
        .should("have.text", "Unavailable")

        cy.get("#by-name").type("asldkjfalsdjf")

        cy.get("#name-form").submit()

        cy.get("#drink-unavailable")
        .should("have.text", "Not A Valid Input")

        cy.get("#random-form").submit()

        cy.get(".drink")
        .should("have.length", 1)

        cy.get("#by-ingredient").type("lemasdfon")

        cy.get("#ingredients-form").submit()

        cy.get("#drink-unavailable")
        .should("have.text", "Not A Valid Input")

    })
})