class SavePage {

    selectorsList = {
            saveButton: "[type='submit']",
        }

    saveMyInfo() {
        cy.get(this.selectorsList.saveButton).eq(0).click({force: true})
   }

    validateSuccessMassage() {
        cy.get('body').should('contain', 'Successfully Updated')
    }
    
}


export default SavePage