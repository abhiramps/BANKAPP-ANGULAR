import { Component, OnInit } from '@angular/core';
import { BankServiceService } from "../services/bank-service.service";
import { Router } from "@angular/router";
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public details:{_id:string,username:string,accno:number,balance:string,password:string}[]=[]
  // public details:any=[]

  constructor( private BankService: BankServiceService,private router:Router) {
    BankService.getUsers()
    .subscribe((data:any)=>{
      // for(let i=0;i<data.length;i++){   //this method can also use
      //   // console.log(data[i])
      //   this.details.push(data[i]);
      // }
      this.details=data;
      console.log(this.details)
    })
   }

  ngOnInit(): void {
  }
  
  edit=(item:any)=>{
    this.router.navigate(["user",item._id])
  }

}
