
import { Component, OnInit, Output } from '@angular/core';
import { Router } from "@angular/router";
import { BankServiceService } from "../services/bank-service.service";



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = "";
  password = "";


  btn_name="submit";
  msg="successfully logged in"

  
  constructor(private route: Router,private BankService:BankServiceService) {

  }

  ngOnInit(): void {
  }
  
  // onUserNameChange(event: any) {
  //   // alert(event.target.value);
  //   this.username = event.target.value;
  // }
  // onPasswordChange(event: any) {
  //   // alert(event.target.value);
  //   this.password = event.target.value;
  // }

  // login() {
  //   // alert("login")
  //   let user = this.BankService.authenticateUser(this.username, this.password)
  //   debugger;
  //   //let user = bank.authenticateUser(uname, pwd)
  //   if (user == 1) {
  //     alert("successful login")
  //     // window.location.href = "testhome.html"
  //     this.route.navigateByUrl("/home")

  //   }
  //   else if (user == 0) {
  //     alert("invalid password")
  //     // let lab = document.querySelector("#plab");
  //     // lab.textContent = " invalid password";
  //     // lab.style.color = "red";
  //   }
  //   else {
  //     // let lab = document.querySelector("#lab");
  //     // lab.textContent = "invalid username";
  //     // lab.style.color = "red";
  //     alert("username dosent exist")

  //   }
  // }

 

}
