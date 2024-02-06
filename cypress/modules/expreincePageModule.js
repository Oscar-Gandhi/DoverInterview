import expriencePageLocators from "../locators/expriencePageLocators";

const elements = expriencePageLocators.elements

class expriencePageModules{

    createARaffle(data){
        //Enter User Name , Email and Age on the page
        elements.namefield().should('exist').type(data.userName)
        elements.emailfield().should('exist').type(data.userEmail)
        elements.agefield().should('exist').type(data.agefield)
        if(data.reasonOptional == "Yes"){
        elements.reasonfield().should('exist').type(data.reason)
        }
        //Click on Submit button 
        elements.submitButton().should('be.visible').click()
        //As the user page takes time to submit
        cy.wait(2000)
    }

    submissionConfirmation(data){
        if(data.agefield >= 18){
        //Assestion of User Page Submitted Successfully 
        elements.submissionConfirmed().should('be.visible')
       }
        else if(data.agefield >= 17){
            elements.agelessWarningMessage().should("be.visible")
        }
        else if(data.multipleDataTest == "Yes"){
            elements.WarningMessage().should("include.text",data.multipetestWarningMessage)
        }

    }
    createRaffleWithSecondData(data){
        cy.reload()
         //Enter User Name , Email and Age on the page
         elements.namefield().should('exist').type(data.userName1)
         elements.emailfield().should('exist').type(data.userEmail1)
         elements.agefield().should('exist').type(data.agefield1)
         elements.reasonfield().should('exist').type(data.reason1)
         //Click on Submit button 
         elements.submitButton().should('be.visible').click()
    }

}

export default new expriencePageModules