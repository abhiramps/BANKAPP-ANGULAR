import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BankServiceService {

  constructor() { }

  accountDetails: any = {
    userone: { accno: 1000, balance: 1000, username: "userone", password: "testuser1", history: [] },
    usertwo: { accno: 1001, balance: 1000, username: "usertwo", password: "testuser2", history: [] },
    userthree: { accno: 1002, balance: 1000, username: "userthree", password: "testuser3", history: [] }
  }

  public USERNAME="";  //for history

  authenticateUser(uname: string, pwd: string) {
    let dataset = this.accountDetails;

    // var list = {}
    // list = dataset;

    if (uname in dataset) {
      //alert("username exists")
      if (dataset[uname].password === pwd) {

        this.USERNAME=uname;
        return 1;
        // window.location.href = "testhome.html"
        // alert("successful login")
      }
      else {
        return 0;
        // alert("invalid password")

      }
    }
    else {
      return -1;
     
    }

  }


  deposit = (uname: string, pwd: string, amnt: number) => {

    var user = this.authenticateUser(uname, pwd);
    let dataset = this.accountDetails;
    // var amount=parseInt(amnt);

    
    debugger;

    if (user == 1) {

     
      dataset[uname].balance += amnt;
      alert("ur acc has been credited with amnt" + amnt + "aval balance " + dataset[uname].balance);

      dataset[uname].history.push({ username: uname, amount: amnt, type_of_transaction: "credit" })  //history
      
    }
    else if (user == 0) {
      alert("invalid password")


    }
    else {

      alert("username dosent exist")
    }
    return user;
  }

  withdraw = (uname: string, pwd: string, amnt: number) => {

    var user = this.authenticateUser(uname, pwd);
    let dataset = this.accountDetails;

    if (user == 1) {

      if (dataset[uname].balance >= amnt) {

        dataset[uname].balance -= amnt;
        alert("ur acc has been debited with amnt" + amnt + "aval balance " + dataset[uname].balance)

        dataset[uname].history.push({ username: uname, amount: amnt, type_of_transaction: "debit" })  //history
        
      }
      else {
        alert("insufficient balance");
      }
    }
    else if (user == 0) {
      alert("invalid password")

    }
    else {
      alert("username dosent exist")
    }


  }

  onHistory(){
    return this.accountDetails[this.USERNAME].history
    // let dataset=this.accountDetails;
    // return dataset["userone"].history;
  }

}
