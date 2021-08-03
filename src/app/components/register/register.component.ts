import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  confirmPasswordValidator } from '../confirm-password/confirm-password.directive';
import { VisitorRegister } from '../../_models/AccountsModel';
import { ResponseHandling } from '../../_models/ResponseHandling';
import { AccountsService } from '../../_services/accounts.service';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public visitorRegister: VisitorRegister;
  form: FormGroup;
  submitted = false;
  public responseHandling: ResponseHandling;

  constructor(private formBuilder: FormBuilder, private accountsService :AccountsService) {
    this.responseHandling = new ResponseHandling();

   }

  ngOnInit() {
    this.form = this.formBuilder.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['',[Validators.required, Validators.minLength(8),Validators.pattern("^[0-9]*$")]],
      password: ['', [ Validators.required,Validators.minLength(6), Validators.pattern("^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$")]],      
      confirmPassword: ['', Validators.required]
  });
  this.handleFormChanges();
  }
 get  f() { return this.form.controls; }


  onSubmit() {
      this.submitted = true;

      if (this.form.invalid )  {
          return;
      }
    console.log(this.form.value) 

      this.visitorRegister = new VisitorRegister(
        this.form.value.fullName,
         this.form.value.email,
         this.form.value.password,
         this.form.value.confirmPassword,
         this.form.value.phoneNumber,
         )
     this.accountsService.visitorRegister(this.visitorRegister).subscribe(
      data => {
        this.responseHandling.succeeded = true;
        this.responseHandling.failed= false;
        this.responseHandling.message="Utilisateur enregistré avec succès!";
      },
      (error: HttpErrorResponse) => {
        console.log(error)
        this.responseHandling.failed= true;
        this.responseHandling.succeeded= false;
        this.responseHandling.message= error.status + ' ' + error.statusText + ': ' + error.error;

      }
    );
  }
handleFormChanges() {
  this.confirmPassword.valueChanges.subscribe(
  () => {
    const pwd = this.password.value;
    this.confirmPassword.setValidators([ Validators.required, confirmPasswordValidator(pwd) ]);
  });     
}
get confirmPassword() {
return this.form.get('confirmPassword');
}  
get password() {
return this.form.get('password');
}  



}
