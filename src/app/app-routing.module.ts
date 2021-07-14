import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { RegistrationComponent } from './registration/registration.component';
import { TransactionHistoryComponent } from "./transaction-history/transaction-history.component";
import { UserProfileComponent } from "./user-profile/user-profile.component";
import { UsersComponent } from './users/users.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { AuthGuard } from './guards/auth.guard';
import { AnimationsComponent } from './animations/animations.component';



const routes: Routes = [
  { path: "", component: LoginComponent}, 
  { path: "login", component: LoginComponent }, 
  { path: "home", component: HomeComponent,canActivate:[AuthGuard] },   //authguard is used to prevent the unauthorized acess tothe page through url
  { path: "registration", component: RegistrationComponent}, //we have to mension the components which we have to guard
  { path: "userProfile", component: UserProfileComponent ,canActivate:[AuthGuard]},
  { path: "transHistory", component: TransactionHistoryComponent,canActivate:[AuthGuard] },
  { path: "user", component: UsersComponent ,canActivate:[AuthGuard]},
  { path: "user/:id", component: UserEditComponent,canActivate:[AuthGuard] },
  { path: "animation", component: AnimationsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
