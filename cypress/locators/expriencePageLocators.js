class expriencePageLocators{

    elements = {
        namefield:()=> cy.get("input#input-3"),
        emailfield:()=> cy.get("input#input-4"),
        agefield:()=> cy.get("input#input-8"),
        reasonfield:()=>cy.get("input#input-9"),
        submitButton:()=> cy.contains("Submit"),
        submissionConfirmed: ()=> cy.contains("Submission Confirmed"),
        agelessWarningMessage: ()=>cy.contains("Must be 18 or older to enter."),
        WarningMessage: ()=> cy.get("div.snippet__Body-sc-12bo3rm-0.cmpVnN").last(),

    }
}

export default new expriencePageLocators()