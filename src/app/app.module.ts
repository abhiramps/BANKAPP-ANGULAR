import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { BankServiceService } from './services/bank-service.service';
import { LoginStructureComponent } from './login-structure/login-structure.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { TransactionHistoryComponent } from './transaction-history/transaction-history.component'
import { HttpClientModule } from '@angular/common/http';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UsersComponent } from './users/users.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { AnimationsComponent } from './animations/animations.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegistrationComponent,
    LoginStructureComponent,
    TransactionHistoryComponent,
    UserProfileComponent,
    UsersComponent,
    UserEditComponent,
    AnimationsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule
    
  ],
  providers: [BankServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
