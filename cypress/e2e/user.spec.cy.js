import userData from '../fixtures/users/userData.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'
import MenuPage from '../pages/MenuPage'
import MyInfoPage from '../pages/myInfoPage'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()

describe('Orange HRM Tests', () => {


  it.only('User Info Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSucess.username, userData.userSucess.password)

    dashboardPage.accessDashboardPage()

    menuPage.menuPage()

    myInfoPage.fillPersonalDatails('NameTest','LastNameTest')
    myInfoPage.fillEmployId('IdTest','OtherIdTest','NumberTest','1995-12-12')
    myInfoPage.fillStatus('Italian','Single','2000-09-12')
    myInfoPage.saveForm()
  })


  it('User Info Update - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).contains('Login').click()
    cy.get(selectorsList.wrongCredentialAlert).should('contain', 'Invalid credentials')

  })
})