import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from "@angular/router";
import { BankServiceService } from "../services/bank-service.service";
import { FormBuilder, Validators } from "@angular/forms";

// var bal="";

@Component({
  selector: 'app-login-structure',
  templateUrl: './login-structure.component.html',
  styleUrls: ['./login-structure.component.css']
})

export class LoginStructureComponent implements OnInit {

  // username = "";
  // password = "";

  public USERNAME = "";


  @Input() submit = "";
  @Input() message = "";

  sucess = ""
  public bal = "";

  @Output() public UserName = new EventEmitter();
  @Output() public PassworD = new EventEmitter();
  //  @Output() public UseR = new EventEmitter();

  // reactive forms method

  public LoginForm = this.fb.group({
    username: ["", [Validators.required]],
    password: ["", [Validators.required, Validators.minLength(5)]]
  })
  // public getToken=

  constructor(private route: Router, private BankService: BankServiceService, private fb: FormBuilder) {

  }

  ngOnInit(): void {
  }

  // availableBalance=()=>{
  //      return  this.bal   
  // }  
  // ************ event binding method *********
  // onUserNameChange(event: any) {
  //   // alert(event.target.value);
  //   this.username = event.target.value;
  // }
  // onPasswordChange(event: any) {
  //   // alert(event.target.value);
  //   this.password = event.target.value;
  // }

  login() {

    if (this.LoginForm.valid == false) {
      console.log(this.LoginForm)

      // if(this.LoginForm.get('username')?.errors){
      //   alert("username is invalid")
      // }
      // else if(this.LoginForm.get('password')?.errors){
      //   alert("password is invalid")
      // }
      alert("form is invalid");
    }
    else {
      // alert("login")
      var username = this.LoginForm.value.username;
      var password = this.LoginForm.value.password;

      this.UserName.emit(username);
      this.PassworD.emit(password)

      let user = this.BankService.authenticateUser(username, password)
        .subscribe((data: any) => {
          alert(data.message);

          this.bal = data.avalBalance; //set available balance
          console.log(data.avalBalance);
          localStorage.setItem("token", data.token);//this is for storing the token sended by the server.localstorage is for storing permenent data.
          this.route.navigateByUrl("/home");

          // var avalBalance=data.avalBalance;  //available balance of this user
          // localStorage.setItem("avalBalance",data.avalBalance)
          // alert(avalBalance);
        }, (err) => {
          // console.log(err.error.message);
          alert(err.error.message);
        });

      // this.UseR.emit(user);
      // debugger;
      //let user = bank.authenticateUser(uname, pwd)
      // if (user == 1) {
      //   // alert(this.message)
      //   if (this.message == "user verified sucessfully") {
      //     this.sucess = this.message;
      //     // this.USERNAME=username;
      //   }
      //   else {
      //     this.sucess = ""
      //   }
      //   // window.location.href = "testhome.html"
      //   this.route.navigateByUrl("/home")
      // }
      // else if (user == 0) {
      //   // alert("invalid password")
      //   this.sucess = "invalid password"
      // }
      // else {
      //   alert("username dosent exist")
      // }
    }
  }
}

// export availableBalance();
