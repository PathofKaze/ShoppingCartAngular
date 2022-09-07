import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs'
import { Registration } from '../model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {

  @Output()
  onNewRegistration = new Subject<Registration>()

  regForm!: FormGroup
  
  constructor(public fb: FormBuilder) { }

  ngOnInit(): void {
    this.regForm = this.createForm()
  }

  private createForm(): FormGroup {
    return this.fb.group({
      name: this.fb.control('',[Validators.required,Validators.minLength(3)]),
      price: this.fb.control<number>(0.1,[Validators.required,Validators.min(1)]),
      quantity: this.fb.control<number>(1,[Validators.required,Validators.min(1)]),
    })
  }

  processForm(){
    console.info("Submit button clicked")
    const reg: Registration = this.regForm.value as Registration
    console.info(">>> Registration ", reg)
    this.regForm = this.createForm()
    this.onNewRegistration.next(reg)
  }
}
