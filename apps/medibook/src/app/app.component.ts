import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {MenuItem} from 'primeng/api';


@Component({
  selector: 'medibook-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'medibook';
  loginForm: FormGroup;

  constructor(private fb: FormBuilder){
    this.loginForm = this.fb.group({
      email: [],
      password: []
    })
  }
  submitLogin(){
    console.log(this.loginForm.value)
  }
}
