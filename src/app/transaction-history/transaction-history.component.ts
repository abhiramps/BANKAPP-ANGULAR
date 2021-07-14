import { Component, OnInit } from '@angular/core';
import { BankServiceService } from "../services/bank-service.service";


@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.css']
})
export class TransactionHistoryComponent implements OnInit {

  public transactions:{username:string,amount:number,type_of_transaction:string}[] = [
   
  ];
  constructor(private BankService: BankServiceService) { 

   this.BankService.onHistory().subscribe((data:any)=>{
    this.transactions=data.history
      // alert(data.message)
    })
  }

  ngOnInit(): void {
  }
  
  // public  transactions = []
  // objectKeys=Object.keys(this.transactions);
}


// { username: "abhi", amount: 1000, type_of_transaction: "credit" },
// { username: "ram", amount: 500, type_of_transaction: "debit" },
// { username: "sasi", amount: 3000, type_of_transaction: "credit" },
// { username: "sugu", amount: 2000, type_of_transaction: "debit" },