import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NeftComponent } from './components/neft/neft.component';
import { RtgsComponent } from './components/rtgs/rtgs.component';
import { ImpsComponent } from './components/imps/imps.component';
import { LoginComponent } from './components/login/login.component';
import { ForgotuseridComponent } from './components/forgotuserid/forgotuserid.component';
import { CheckApplicationStatusComponent } from './components/check-application-status/check-application-status.component';
import { TransactionHistoryComponent } from './components/transaction-history/transaction-history.component';
import { AddBeneficiaryComponent } from './components/add-beneficiary/add-beneficiary.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TransactionSuccessfulComponent } from './components/transaction-successful/transaction-successful.component';
import { AdminDashBoardComponent } from './components/admin-dash-board/admin-dash-board.component';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { AdminNavbarComponent } from './components/admin-navbar/admin-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NeftComponent,
    RtgsComponent,
    ImpsComponent,
    LoginComponent,
    ForgotuseridComponent,
    CheckApplicationStatusComponent,
    TransactionHistoryComponent,
    AddBeneficiaryComponent,
    TransactionSuccessfulComponent,
    AdminDashBoardComponent,
    CustomerDetailsComponent,
    AdminNavbarComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
