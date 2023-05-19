import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
//import { LoginDetails } from '../Auth/authentication-services.service';
import { AuthenticationsService, LoginDetails } from '../Authentication/authentications.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit{
  hide: boolean = false;

  // deta = [
  //   {id:1,pass:"Tejas@29"},
  // ]
  constructor(private auth:AuthenticationsService, private fb: FormBuilder,private router:Router,private _snackBar:MatSnackBar) { }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {});
  }

  ngOnInit() {
    //this.login(this.dataa)
    //this.auth.getAuth()

  }
  passwordVisibility:boolean=false;

  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required,Validators.minLength(6),Validators.maxLength(100)]],
    password: ['', [Validators.required, Validators.minLength(6),Validators.maxLength(100)]]
  })


  onLogin() {
    if (!this.loginForm.valid) {
      return;
    }
    console.log(this.loginForm.value);
  }

  togglePasswordVisibility(){
    this.passwordVisibility=!this.passwordVisibility;
  }
  userr:any;
  passs:any;
  dataa:LoginDetails
  async login(formdata:LoginDetails){
    this.dataa = formdata
    console.log(this.dataa.email)
    console.log(this.dataa.password)
    // this.auth.getAuth(formdata).subscribe(
    //   {
    //     next : (data) =>{
    //       console.log(data.email)
    //       console.log(data.password)
    //       console.log(formdata.email)
    //       console.log(formdata.password)
    //       this.router.navigateByUrl(" ").then(()=>{
    //         window.location.reload


    //       });
    //       console.log(data)

    //     },
    //     error :(error) =>{

    //       console.log(error)
    //     }
    //   }
    // )

    this.auth.getOath().subscribe(data=>{
      console.log(data)
      this.userr = (data[0]['email'])
      this.passs = (data[0]['password'])
    })

    if (this.dataa.email===this.userr && this.dataa.password===this.passs) {
               this.router.navigateByUrl(" ").then(()=>{
              window.location.reload
               })
    } else {

    }
  }
  isChecked(){
    return true;
  }

}
