import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials = {
    username: '',
    password: ''
  }
  constructor(private loginService:LoginService) { }

  ngOnInit(): void {
  }
  onSubmit()
  {
    if((this.credentials.username!='' && this.credentials.password!='') && (this.credentials.username!=null && this.credentials.password!=null))
    {
        //token generate
        // console.log("Sent to server");
        this.loginService.generateToken(this.credentials).subscribe(
          (response:any)=>{
            //succes
            console.log(response);
            this.loginService.loginUser(response.token);
            window.location.href="/home";  
          },
          error=>{
            //error
            alert("Wrong credential")
            console.log(error);
          }
        )
    }
    else
    {
        console.log("Fields are empty!");
    }
  }

}


