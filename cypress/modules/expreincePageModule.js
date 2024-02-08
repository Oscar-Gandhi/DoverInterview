import expriencePageLocators from "../locators/expriencePageLocators";

const elements = expriencePageLocators.elements

class expriencePageModules{

    createARaffle(data){
        //Enter User Name , Email and Age on the page
        elements.namefield().should('exist').type(data.userName)
        //To skip the Mandatory Field
        if(data.skipeMailAddress == "Yes"){
            elements.emailfield().should('exist')
        }
        else if(data.skipeMailAddress == "No"){
        elements.emailfield().should('exist').type(data.userEmail)
        }
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
        if(data.agefield >= 18 && data.skipeMailAddress == "Yes"){
            //If eMail address is not present
            elements.WarningMessage().should("include.text",data.skipeMailwarningMessage)
        }
        else if(data.agefield >= 18){
        //Assestion of User Page Submitted Successfully 
        elements.submissionConfirmed().should('be.visible')
       }
        else if(data.agefield >= 17){
            //If age is less than 18
            elements.agelessWarningMessage().should("be.visible")
        }
        else if(data.multipleDataTest == "Yes"){
            elements.WarningMessage().should("include.text",data.multipetestWarningMessage)
        }
        else if(data.agefield >= 18 && data.skipeMailAddress == "Yes"){
            //If eMail address is not present
            elements.WarningMessage().should("include.text",data.skipeMailwarningMessage)
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
    borderColorCheck(data){
        elements.namefield().should('have.css','border-color','rgb(30,144,255)')
    }

}

export default new expriencePageModules