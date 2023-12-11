import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { LoginFormComponent } from './login-form/login-form.component';
import { AppComponent } from './app.component';
import { MealsComponent } from './meals/meals.component';
import { MealComponent } from './meal/meal.component';
import { MydatePipe } from './mydate.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    MealsComponent,
    MydatePipe,
    MealComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
