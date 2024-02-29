/// <reference types = "cypress" />

import expreincePageModule from "../modules/expreincePageModule";



describe(" User Exprience Page Test",function() {
    before(()=>{
        cy.fixture("expriencePage.json").then(data=>{
            this.testdata = data
        })
    })
    beforeEach(() => 
            cy.visit("/")
    )
    
    it("To test User Exprience Page with Vaild test data",()=>{
        //Valid User name and eMail
        const expData = this.testdata[0]
        expreincePageModule.createARaffle(expData)
        expreincePageModule.submissionConfirmation(expData)
    })
    it("To test User Exprience Page with Vaild test data",()=>{
        //Second to test Valid User name, eMail and age
        const expData = this.testdata[1]
        expreincePageModule.createARaffle(expData)
        expreincePageModule.submissionConfirmation(expData)
    })
    it("To test User Exprience Page with Age less than 18",()=>{
        //Invalid Test Data where age is 16
        const expData = this.testdata[2]
        expreincePageModule.createARaffle(expData)
        expreincePageModule.submissionConfirmation(expData)
    })
    it("To test User Exprience Page with Age 17 -Defect ID 001",()=>{
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
    it("To test User Exprience Page When User skips eMail Address field and submit the form - Defect",()=>{
        //IF user Skips a Mandatory field there is no error message and form gets submitted
        const expData = this.testdata[5]
        expreincePageModule.createARaffle(expData)
        expreincePageModule.submissionConfirmation(expData)
    })
    it("To test User Exprience Page User should be able to submit a form with Reason as Optional",()=>{
        const expData = this.testdata[6]
        expreincePageModule.createARaffle(expData)
        expreincePageModule.submissionConfirmation(expData)
    })

    it("To Test User Exprience Page text Field User Border Color - Defect",()=>{
        //Test to Fail .As per UI/UX when input field is focused should turn blue in Color but the color is black
        expreincePageModule.borderColorCheck()
    })
    it("To Test User Exprience Page text Field User Border Color - Defect",()=>{
        //Test to Fail .As per UI/UX when input field is focused should turn blue in Color but the color is black
        expreincePageModule.borderColorCheck()
    })

    
})