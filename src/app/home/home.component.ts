import { Component, Input, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { BankServiceService } from "../services/bank-service.service";
import { FormBuilder } from "@angular/forms";
// import { LoginStructureComponent } from "../login-structure/login-structure.component";



// var avalBalance="";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  // public username = "";
  // public password = "";
  // public amount = "";

  btn_name="verify";
  msg="user verified sucessfully";

  @Input() username = "";
  @Input() password = "";

  
//  public avalBalance=localStorage.getItem("avalBalance");   //storing aval balance

  
  public homeForm=this.fb.group({
    amount:[""],
  }) 
  constructor(private router: Router, private BankService: BankServiceService,private fb: FormBuilder) { 
  
  }

//  var Bal=this.avalBal.availableBalance;
  ngOnInit(): void {
  }

  public avalBalance="";
  
  onBack() {
    this.router.navigateByUrl("/login")
  }

  // onUsernameChange(event: any) {
  //   this.username = event.target.value;
  // }
  // onPasswordChange(event: any) {
  //   this.password = event.target.value;
  // }

  // ********* event binding method***********
  // onDepositChange(event: any) {
  //   this.amount = event.target.value;
  // }
  // onWithdrawChange(event: any){
  //   this.amount = event.target.value;
  // }

  // public USER: any;

  // onClick() {
  //   var user = this.BankService.authenticateUser(this.username, this.password)
  //   this.USER=user;
  //   debugger;

  //   if (user == 1) {
  //     alert("successful login")


  //   }
  //   else if (user == 0) {
  //     alert("invalid password")

  //   }
  //   else {

  //     alert("username dosent exist")

  //   }
  // }

  // isNumber=(amnt:any)=>{
    
  //   if(isNaN(amnt)){
  //     alert("plese enter valid amount")
      
  //   }
  //   else{
  //     return amnt;
  //   }
  // }

 
  onDeposit() {
    var amnt=parseInt(this.homeForm.value.amount);
    
    if(isNaN(amnt)){
      alert("plese enter valid amount")
    }
    else{
      this.BankService.deposit( amnt).subscribe((data:any)=>{
        alert(data.message);
        console.log(data.balance)
        this.avalBalance=data.balance;
      })

    // let data=this.BankService.accountDetails;
    // let userHistory= data[this.username].history;
    // console.log(a);
    //   debugger;
    // if(a==1){
    //   this.router.navigateByUrl("/history");
    // }
    // else{
    
    // }
    }
  }

  onWithdraw(){

    var amnt=parseInt(this.homeForm.value.amount);
    if(isNaN(amnt)){
      alert("plese enter valid amount")
    }
    else{
      this.BankService.withdraw(amnt).subscribe((data:any)=>{
        alert(data.message)
        this.avalBalance=data.balance;
      })
    }
   
  }

  logout(){
    localStorage.removeItem("token");
    this.router.navigateByUrl("/login")
    alert("logout sucessfully")
  }
}

// var amnt=parseInt(this.amount);