bank-app -angular -frontEnd
===================

components used
---------------
=>root component(app)
    =>login
    =>home
    =>registration
    =>user profile
    =>transaction history

services used
-------------
bank-service

nb:we have to enable routing and also set the paths to the corresponding routes inside app-router.module.ts
    and add  <router-outlet></router-outlet> in app.component.html.
    and add  <base href="/"> to index.html

STEPS
-----
step 1 => create required components inside app component using "ng g c component-name";
step 2 => create structures using html and css for the corresponding components.
step 3 => a) lets take login component,inside login component,first create the ui for reactive forms.
          b) to enable reactive forms functionality ,we have to import the module from from forms.
             ie,import {ReactiveFormsModule} from '@angular/forms'; and add to imports directives
          c) set the properites to the form tag .ie,[formGroup]="form-group-name" and (ngSubmit)="event()".here login()
          d) by using ngSubmit ,we dosen't have to use (click) event in submit button 
             and also set properites to the input tags.ie, formControlName="name-of-the-input", name="name-of-the-input".
          e) formControlName is used to get the contents that we have entered in the text box. name attribute is mandidatory.
step 4 => in login components ts file(login-structure.component.ts) import { Router } from "@angular/router"; for enable routing
          then set set it to a variable inside constructor for accesing ie, private route: Router
           we can use this.route.navigateByUrl("/home") to navigate
step 5 =>  import { FormBuilder, Validators } from "@angular/forms"; for reactive forms.
            set  private fb: FormBuilder inside constructor.
            using this.fb.group({}) can access the value of the text box
step 6 =>  ie, public LoginForm = this.fb.group({
            username: ["", [Validators.required]],
            password: ["", [Validators.required,Validators.minLength(5)]]  })
            Validators.required field will set the text box to required filed
            we will get the input value to the variables in LoginForm and it should be not null.
            var username = this.LoginForm.value.username; can set the input value to a variable
            this.LoginForm.valid == false will check the form is invalid or not
            if not , then send the username, password to the authenticate using authenticateUser fn in service;
step 7 =>  
step 8 =>  
step 9 =>  
step 10 =>  
