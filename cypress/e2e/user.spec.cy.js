import userData from '../fixtures/users/userData.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'
import MenuPage from '../pages/MenuPage'
import MyInfoPage from '../pages/myInfoPage'

const Chance = require('chance');

const chance = new Chance();
const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()

describe('Orange HRM Tests', () => {


  it('User Info Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSucess.username, userData.userSucess.password)

    dashboardPage.accessDashboardPage()

    menuPage.accessMyInfo()

    myInfoPage.fillPersonalDatails(chance.first(),chance.last())
    myInfoPage.fillEmployId('IdTest','OtherIdTest','NumberTest','1995-12-12')
    myInfoPage.fillStatus('Italian','Single','2000-09-12')
    myInfoPage.saveForm()
  })
})