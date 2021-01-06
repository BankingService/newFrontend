import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NeftComponent } from './components/neft/neft.component';
import { RtgsComponent } from './components/rtgs/rtgs.component';
import { ImpsComponent } from './components/imps/imps.component';
import { LoginComponent } from './components/login/login.component';
import { ForgotuseridComponent } from './components/forgotuserid/forgotuserid.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CheckApplicationStatusComponent } from './components/check-application-status/check-application-status.component';
import { TransactionHistoryComponent } from './components/transaction-history/transaction-history.component';

@NgModule({
  declarations: [
    AppComponent,
    NeftComponent,
    RtgsComponent,
    ImpsComponent,
    LoginComponent,
    ForgotuseridComponent,
    CheckApplicationStatusComponent,
    TransactionHistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
