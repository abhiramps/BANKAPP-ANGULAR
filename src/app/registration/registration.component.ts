import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { BankServiceService } from "../services/bank-service.service";
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {


  // public list;
  // RegForm = this.fb.group({
  //   username: ["", [Validators.required]],
  //   accno: ["", [Validators.required,Validators.pattern('[0-9]{5}')]],
  //   balance: ["", [Validators.required]],
  //   password: ["", [Validators.required]],
  //   rePassword: ["", [Validators.required]]
  // })
  RegForm =this.fb.group({
    username:["",[Validators.required,Validators.pattern('^[a-zA-Z]+$')]],
    accno:["",[Validators.required,Validators.minLength(4)]],
    balance:["",[Validators.required]],
    password:["",[Validators.required,Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$')]],
    confirmPass:["",[Validators.required]],
  })
  constructor(private route: Router, private BankService: BankServiceService, private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  register = () => {
    //  var dataset =this.BankService.accountDetails;

    var accountno = parseInt(this.RegForm.value.accno);
    var balance = parseInt(this.RegForm.value.balance);
    var username = this.RegForm.value.username;
    var password = this.RegForm.value.password;

    if (this.RegForm.valid == false) {
      alert("invalid form")
      console.log(this.RegForm.get('accno')?.errors?.minlength.actualLength)
    }
    else {
      this.BankService.onRegistration(accountno, balance, username, password)
        .subscribe((data: any) => {
          alert(data.message)
        })
    }
  }
}
