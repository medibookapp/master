import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiClient } from './api.service';


@Component({
  selector: 'medibook-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'medibook';
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private api: ApiClient
  ){
    this.loginForm = this.fb.group({
      email: [],
      password: []
    });
  }
  submitLogin(){

    console.log(this.loginForm.value)
    this.api.postLogin(this.loginForm.value).subscribe(rs =>{
      console.log(rs);
    });
  }
}
