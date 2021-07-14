import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BankServiceService } from '../services/bank-service.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

public userEdit=this.fb.group({
  username:[""],
  accountNo:[""],
  balance:[""]
})
public _id="";
  constructor(private route:ActivatedRoute,private BankService: BankServiceService,private fb:FormBuilder) {
    this.route.paramMap.subscribe((param:any)=>{
      // console.log(param.params.id)
      const userId=param.params.id;
      BankService.GETuser(userId)
      .subscribe((userData:any)=>{
        // console.log(userData._id)
        this._id=userData._id;

        this.userEdit.patchValue({
          username:userData.username,
          accountNo:userData.accno,
          balance:userData.balance,
        })
      })
    })
  }

  update = () => {        //update the edited data to db
    if (this.userEdit.valid == false) {
      alert("form is invalid")
    }
    else {
      let uname=this.userEdit.value.username;
      let accno=this.userEdit.value.accountNo;
      let balance=this.userEdit.value.balance;
      // console.log(accno)
      // debugger;
      this.BankService.updateEditUser(uname,accno,balance,this._id)
      .subscribe((data:any)=>{
        // debugger;
        alert(data.message)
        console.log(data)
      })
    }
    
  }


  ngOnInit(): void {
  }

}
