import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';

import { NotFoundComponent } from './components/not-found/not-found.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ForgotPassswordComponent } from './components/forgot-passsword/forgot-passsword.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotPassswordComponent,
    NotFoundComponent

  ],
  imports: [
     ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }