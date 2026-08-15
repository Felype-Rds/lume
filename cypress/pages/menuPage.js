class MenuPage {

    selectorsList() {
        const selectorsList = {
            myInforButton: '[href="/web/index.php/pim/viewMyDetails"]',
        }
        return selectorsList
    }

    menuPage() {
        cy.get(this.selectorsList().myInforButton).click()
    }
}

export default MenuPage