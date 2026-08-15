class MyInfoPage {

    selectorsList() {
        const selectorsList = {
            myInforButton: '[href="/web/index.php/pim/viewMyDetails"]',
            firstNameField: "[name='firstName']",
            lastNameField: "[name='lastName']",
            genericField: ".oxd-input",
            datePickerField: "[placeholder='yyyy-dd-mm']",
            closeButton: ".--close",
            dropdown: ".oxd-select-text-input",
            radioButton: ".oxd-radio-input--active"
        }

        return selectorsList
    }

    accessMyInfoPage() {
        cy.get(this.selectorsList().myInforButton).click()
    }

    formFieldsMyInfo(
            firstName, 
            lastName, 
            // nickName, 
            idTest, 
            otherId, 
            driverLicenseNumber, 
            // ssnNumber, 
            // sinNumber, 
            dateLicense, 
            nationality, 
            marital, 
            dateBirth
        ) {
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)
        // cy.get(this.selectorsList().genericField).eq(4).clear().type(nickName)
        cy.get(this.selectorsList().genericField).eq(5).clear().type(idTest)
        cy.get(this.selectorsList().genericField).eq(6).clear().type(otherId)
        cy.get(this.selectorsList().genericField).eq(7).clear().type(driverLicenseNumber)
        // cy.get(this.selectorsList().genericField).eq(8).clear().type(ssnNumber)
        // cy.get(this.selectorsList().genericField).eq(9).clear().type(sinNumber)
        cy.get(this.selectorsList().datePickerField).eq(0).clear().type(dateLicense)
        cy.get(this.selectorsList().closeButton).click()
        cy.get(this.selectorsList().dropdown).eq(0).click({ force: true })
        cy.contains(nationality).click()
        cy.get(this.selectorsList().dropdown).eq(1).click({ force: true })
        cy.contains(marital).click()
        cy.get(this.selectorsList().datePickerField).eq(1).clear().type(dateBirth)
        cy.get(this.selectorsList().closeButton).click()
        cy.get(this.selectorsList().radioButton).eq(0).click()
    }   


}

export default MyInfoPage