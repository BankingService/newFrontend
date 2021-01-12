import { registerLocaleData } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountstatementComponent } from './components/accountstatement/accountstatement.component';
import { AccountsummaryComponent } from './components/accountsummary/accountsummary.component';
import { AddBeneficiaryComponent } from './components/add-beneficiary/add-beneficiary.component';
import { AdminDashBoardComponent } from './components/admin-dash-board/admin-dash-board.component';
import { AdminNavbarComponent } from './components/admin-navbar/admin-navbar.component';
import { AdminloginComponent } from './components/adminlogin/adminlogin.component';
import { CheckApplicationStatusComponent } from './components/check-application-status/check-application-status.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { CreateaccountstatusComponent } from './Components/createaccountstatus/createaccountstatus.component';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { DashboardsidebarComponent } from './components/dashboardsidebar/dashboardsidebar.component';
import { FAQComponent } from './components/faq/faq.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ForgotuseridComponent } from './components/forgotuserid/forgotuserid.component';
import { FundTransferComponent } from './components/fund-transfer/fund-transfer.component';
import { HomeComponent } from './components/home/home.component';
import { ImpsComponent } from './components/imps/imps.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { NeftComponent } from './components/neft/neft.component';
import { RegisterComponent } from './components/register/register.component';
import { RtgsComponent } from './components/rtgs/rtgs.component';
import { SetnewpasswordComponent } from './components/setnewpassword/setnewpassword.component';
import { TransactionHistoryComponent } from './components/transaction-history/transaction-history.component';
import { TransactionSuccessfulComponent } from './components/transaction-successful/transaction-successful.component';
import { UserAccountComponent } from './components/user-account/user-account.component';
import { UserdashboardComponent } from './components/userdashboard/userdashboard.component';

const routes: Routes = [
 // {path : '', component:HomeComponent},
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'adminlogin', component: AdminloginComponent },
  { path: 'accountstatement', component: AccountstatementComponent },
  { path: 'admindashboard', component: AdminDashBoardComponent },
  { path: 'adminnavbar', component: AdminNavbarComponent },
  { path: 'createstatus', component:CreateaccountstatusComponent},
  { path: 'checkapplication', component: CheckApplicationStatusComponent },
  { path: 'createaccount', component: CreateAccountComponent },
  { path: 'customerdetailsadmin', component: CustomerDetailsComponent },
  { path: 'dashboardsidebar', component: DashboardsidebarComponent },
  { path: 'faq', component: FAQComponent },
  { path: 'forgotpass', component: ForgotPasswordComponent },
  { path: 'fundtransfer', component: FundTransferComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'setnewpassword', component: SetnewpasswordComponent },
  { path: 'transhistory', component: TransactionHistoryComponent },
  { path: 'transsuccess', component: TransactionSuccessfulComponent },
  { path: 'useraccount', component: UserAccountComponent },
  { path: 'accountsummary', component: AccountsummaryComponent },
  { path: 'userdashboard', component: UserdashboardComponent},
  { path: 'neft', component: NeftComponent },
  { path: 'rtgs', component: RtgsComponent },
  { path: 'imps', component: ImpsComponent },
  { path: 'forgotuserid', component: ForgotuseridComponent },
  { path: 'addBeneficiary', component: AddBeneficiaryComponent },
  {path : '', component:HomeComponent}
  // { path:'', redirectTo:'rtgs',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
