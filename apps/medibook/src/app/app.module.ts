import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {InputTextModule} from 'primeng/inputtext';
import {PasswordModule} from 'primeng/password';
import {InputMaskModule} from 'primeng/inputmask';
import {ButtonModule} from 'primeng/button';






import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ApiClient } from './api.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, 
    InputTextModule, 
    PasswordModule, 
    InputMaskModule, 
    ButtonModule, 
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    ApiClient,
  ],
  bootstrap: [AppComponent], 
})
export class AppModule {}
