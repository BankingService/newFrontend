import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NeftComponent } from './components/neft/neft.component';
import { RtgsComponent } from './components/rtgs/rtgs.component';
import { ImpsComponent } from './components/imps/imps.component';
import { AddBeneficiaryComponent } from './components/add-beneficiary/add-beneficiary.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NeftComponent,
    RtgsComponent,
    ImpsComponent,
    AddBeneficiaryComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
