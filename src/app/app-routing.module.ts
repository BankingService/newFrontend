import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForgotuseridComponent } from './components/forgotuserid/forgotuserid.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path:'login', component:LoginComponent},
  { path:'forgotuserid',component:ForgotuseridComponent },
  { path:'', redirectTo:'login',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
