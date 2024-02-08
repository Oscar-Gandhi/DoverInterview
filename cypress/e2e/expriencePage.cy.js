/// <reference types = "cypress" />

import expreincePageModule from "../modules/expreincePageModule";



describe(" User Exprience Page Test",function() {
    before(()=>{
        cy.fixture("expriencePage.json").then(data=>{
            this.testdata = data
        })
    })
    beforeEach(() => 
            cy.visit("https://blue-bite-dev-3.bluebite.io/04425f7c-4fdd-47f6-85b3-b800d12bb9ca")
    )
    
    it("To test User Exprience Page with Vaild test data",()=>{
        const expData = this.testdata[0]
        expreincePageModule.createARaffle(expData)
        expreincePageModule.submissionConfirmation(expData)
    })
    it("To test User Exprience Page with Vaild test data",()=>{
        const expData = this.testdata[1]
        expreincePageModule.createARaffle(expData)
        expreincePageModule.submissionConfirmation(expData)
    })
    it("To test User Exprience Page with Age less than 18",()=>{
        const expData = this.testdata[2]
        expreincePageModule.createARaffle(expData)
        expreincePageModule.submissionConfirmation(expData)
    })
    it("To test User Exprience Page with Age 17 -Defect",()=>{
        //Test to Fail here becoz age equal to 17 is getting submission confirmed
        const expData = this.testdata[3]
        expreincePageModule.createARaffle(expData)
        expreincePageModule.submissionConfirmation(expData)
    })
    it("To test User Exprience Page when submitted two forms, Number increases By +1",()=>{
        const expData = this.testdata[4]
        expreincePageModule.createARaffle(expData)
        expreincePageModule.submissionConfirmation(expData)
        expreincePageModule.createRaffleWithSecondData(expData)
        expreincePageModule.submissionConfirmation(expData)
    })
    it("To test User Exprience Page User should enter correct eMail Address",()=>{
        const expData = this.testdata[5]
        expreincePageModule.createARaffle(expData)
        expreincePageModule.submissionConfirmation(expData)
    })
    it("To test User Exprience Page User should be able to submit a form with Optional Reason",()=>{
        const expData = this.testdata[6]
        expreincePageModule.createARaffle(expData)
        expreincePageModule.submissionConfirmation(expData)
    })
    
})