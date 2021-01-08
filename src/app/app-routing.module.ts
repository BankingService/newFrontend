import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddBeneficiaryComponent } from './components/add-beneficiary/add-beneficiary.component';
import { ForgotuseridComponent } from './components/forgotuserid/forgotuserid.component';
import { ImpsComponent } from './components/imps/imps.component';
import { LoginComponent } from './components/login/login.component';
import { NeftComponent } from './components/neft/neft.component';
import { RtgsComponent } from './components/rtgs/rtgs.component';

const routes: Routes = [
  { path:'neft',component:NeftComponent},
  { path:'rtgs',component:RtgsComponent},
  { path:'imps',component:ImpsComponent},
  { path:'login', component:LoginComponent},
  { path:'forgotuserid',component:ForgotuseridComponent },
  { path:'addBeneficiary',component:AddBeneficiaryComponent},
  { path:'', redirectTo:'rtgs',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
