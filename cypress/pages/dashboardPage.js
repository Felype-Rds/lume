class DashboardPage {

    selectorsList() {
        const selectorsList = {
            dashboardGrid: ".orangehrm-dashboard-grid",

    }

    return selectorsList
}

accessDashboardPage() {
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(this.selectorsList().dashboardGrid)
}

}

export default DashboardPage