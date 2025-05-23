import userData from '../fixtures/users/userData.json'
import { LoginPage } from '../pages/loginPage'
import { DashboardPage } from '../pages/dashboardPage'
import { MenuPage } from '../pages/menuPage'
import { MyInfoPage } from '../pages/myInfoPage'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()

describe('Orange HRM Tests', () => {

  it('User info update - Success', () => {

    loginPage.accessLoginPage()
    loginPage.loginwithUser(userData.userSuccess.userName, userData.userSuccess.password)
    dashboardPage.checkDashboardPage()
    menuPage.accessMyInfo()
    myInfoPage.fillPersonalDetails('ana', 'alves', 'silva')
    myInfoPage.fillEmployeeDetails('111', '22', '232', '2027-10-12')
    myInfoPage.fillStatus()
    myInfoPage.saveForm()
  })
})
