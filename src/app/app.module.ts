import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserAuthModule } from './user-auth/user-auth.module';


import { UserListComponent } from './user-list/user-list.component';


import { StudentListComponent } from './student-list/student-list.component';
import { CountryListComponent } from './country-list/country-list.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatButtonModule} from  '@angular/material/button';
import { ChildComponent } from './child/child.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { Child2Component } from './child2/child2.component';


@NgModule({
  declarations: [
    AppComponent,
  
    
    UserListComponent,
    
  StudentListComponent,
    CountryListComponent,
    LoginComponent,
    HeaderComponent,
    ChildComponent,
    UserDetailsComponent,
    Child2Component
  ],
  imports: [
    FormsModule,
    BrowserModule,
    UserAuthModule,
    MatSlideToggleModule,
    MatButtonModule,

   
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
