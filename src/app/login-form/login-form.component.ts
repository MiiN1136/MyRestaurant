import { Component } from '@angular/core';

 
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  kjm:string="../assets/images/login.jpg";
  value:string="example@mywebsite.com";
  message:string="";
  emailValue:string="";

  formSubmitted():void{
    this.message="Your message has been successfuly sent.";
    
  }
  

}
