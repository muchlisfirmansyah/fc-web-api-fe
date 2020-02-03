import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './module/login/login.component';
import { BankAccountListComponent } from './module/bank-account-list/bank-account-list.component';
import { AuthGuardService } from 'src/service/auth/auth-guard.service';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', component: LoginComponent},
  {path: 'bankList', component: BankAccountListComponent, canActivate: [AuthGuardService]},
  {path: 'logout', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
