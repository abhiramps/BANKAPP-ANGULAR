import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../environments/environment";

const apiUrl=environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class BankServiceService {

  constructor(private http: HttpClient) { }

  // accountDetails: any = {
  //   userone: { accno: 1000, balance: 1000, username: "userone", password: "testuser1", history: [] },
  //   usertwo: { accno: 1001, balance: 1000, username: "usertwo", password: "testuser2", history: [] },
  //   userthree: { accno: 1002, balance: 1000, username: "userthree", password: "testuser3", history: [] }
  // }

  // public USERNAME = "";  //for history

  authenticateUser(uname: string, pwd: string) {

   return this.http.post(apiUrl+"/login", {
      "username": uname,
      "password": pwd
    });
    
    // let dataset = this.accountDetails;

    // var list = {}
    // list = dataset;

    // if (uname in dataset) {
    //   //alert("username exists")
    //   if (dataset[uname].password === pwd) {

    //     this.USERNAME = uname;
    //     return 1;
    //     // window.location.href = "testhome.html"
    //     // alert("successful login")
    //   }
    //   else {
    //     return 0;
    //     // alert("invalid password")

    //   }
    // }
    // else {
    //   return -1;
    // }
  }

  generateHeader=()=>{
    let token=localStorage.getItem("token"); //for fetching the token stored in the local storage
    let Headers =new HttpHeaders();
    let headers=Headers.set("Authorization","Bearer "+ token)
    return headers
  }

  deposit = ( amnt: number) => {
    // let Headers =new HttpHeaders();
    // let headers=Headers.set("Authorization","Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXJvbmUiLCJpYXQiOjE2MjQyNzk1NDN9.qwa3BMtjscgU78-8Qaf-VgzCghzx_ZG8K9eo1AlRd7Q")

    return this.http.post(apiUrl+"/deposit", {
      
      "amount":amnt
    },{
      headers:this.generateHeader()
    })
    // var user = this.authenticateUser(uname, pwd);
    // let dataset = this.accountDetails;
    // // var amount=parseInt(amnt);


    // debugger;

    // if (user == 1) {


    //   dataset[uname].balance += amnt;
    //   alert("ur acc has been credited with amnt" + amnt + "aval balance " + dataset[uname].balance);

    //   dataset[uname].history.push({ username: uname, amount: amnt, type_of_transaction: "credit" })  //history

    // }
    // else if (user == 0) {
    //   alert("invalid password")


    // }
    // else {

    //   alert("username dosent exist")
    // }
    // return user;
  }

  withdraw = (amnt: number) => {
    // let Headers =new HttpHeaders();
    // let headers=Headers.set("Authorization","Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXJvbmUiLCJpYXQiOjE2MjQyNzk1NDN9.qwa3BMtjscgU78-8Qaf-VgzCghzx_ZG8K9eo1AlRd7Q")

    return this.http.post(apiUrl+"/withdraw", {
      
      "amount":amnt
    },{
      headers:this.generateHeader()
    })
    // var user = this.authenticateUser(uname, pwd);
    // let dataset = this.accountDetails;

    // if (user == 1) {

    //   if (dataset[uname].balance >= amnt) {

    //     dataset[uname].balance -= amnt;
    //     alert("ur acc has been debited with amnt" + amnt + "aval balance " + dataset[uname].balance)

    //     dataset[uname].history.push({ username: uname, amount: amnt, type_of_transaction: "debit" })  //history

    //   }
    //   else {
    //     alert("insufficient balance");
    //   }
    // }
    // else if (user == 0) {
    //   alert("invalid password")

    // }
    // else {
    //   alert("username dosent exist")
    // }
  }
  onHistory() {
    return this.http.get(apiUrl+"/transHistory",{
      headers:this.generateHeader()
    })
    // return this.accountDetails[this.USERNAME].history
    // let dataset=this.accountDetails;
    // return dataset["userone"].history;
  }

  onRegistration=(accno:number,balance:number,uname:string,pwd:string)=>{
    return this.http.post(apiUrl+"/registration", {
      "username": uname,
      "accno":accno,
      "balance":balance,
      "password": pwd,
    })
  }
  
  getProfile=()=>{    //for getting users data 
    return this.http.get(apiUrl+"/userProfile", {
      headers:this.generateHeader()
    })
  }

  updateProfile=(accno:number,balance:number,uname:string)=>{ 
    // console.log(accno)    //updated data
    return this.http.patch(apiUrl+"/userProfile", {
      "accno":accno,
      "balance":balance,
      "username":uname
    },{
      headers:this.generateHeader()
    })
  }

// **********user editing using query parametes passes through url****************
  getUsers=()=>{
    return this.http.get(apiUrl+"/user",{  ///getig all users for listing into a table
      // headers:this.generateHeader()
    })
  }

  GETuser=(userId:number)=>{   ///this is for getting user object corresponding to userid
    return this.http.get(apiUrl+"/user/"+userId,{
      
    })
  }
  updateEditUser=(uname:string,accno:number,balance:number,userId:string)=>{
    console.log(userId)
    return this.http.patch(apiUrl+"/user/"+userId, { //updating a perticular user
      "username":uname,
      "accno":accno,
      "balance":balance
    },{
      headers:this.generateHeader()
    })
  }
}
