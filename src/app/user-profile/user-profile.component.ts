import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { BankServiceService } from "../services/bank-service.service";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  // public profile:any={}

  public userProfile = this.fb.group({
    username: ["", [Validators.required]],
    accountNo: ["", [Validators.required]],
    balance: ["", [Validators.required, Validators.minLength(5)]]
  });

  constructor(private BankService: BankServiceService, private fb: FormBuilder) {
    this.BankService.getProfile()  //get data from db to set to input field
      .subscribe((data: any) => {
        // console.log(data)
        this.userProfile.patchValue({
          accountNo: data.user.accno,
          balance: data.user.balance,
          username: data.user.username
        })
      })
  }
  ngOnInit(): void {
  }

  update = () => {        //update the edited data to db
    if (this.userProfile.valid == false) {
      alert("form is invalid")
    }
    else {
      let accno=this.userProfile.value.accountNo;
      let balance=this.userProfile.value.balance;
      let uname=this.userProfile.value.username;
      // console.log(accno)
      // debugger;
      this.BankService.updateProfile(accno,balance,uname)
      .subscribe((data:any)=>{
        // debugger;
        alert(data.message)
        console.log(data)
      })
    }
    
  }

}

