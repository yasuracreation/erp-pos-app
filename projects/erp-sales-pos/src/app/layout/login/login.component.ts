import { Component, OnInit ,NgModule} from '@angular/core';
import { LoginUserVM } from '../../core/vm/login-user.vm.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'cor-lib';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user!:LoginUserVM
  public loginForm: FormGroup | undefined;
  public submitted = false;

  constructor(private authService:AuthService,private formBuilder: FormBuilder ,private router:Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ["", [Validators.email, Validators.required]],
      password: [
        "",
        [
          Validators.required,
          Validators.pattern(
            "(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>\"'\\;:{\\}\\[\\]\\|\\+\\-\\=\\_\\)\\(\\)\\`\\/\\\\\\]])[A-Za-z0-9d$@].{7,}"
          )
        ]
      ]
    });
  }
  onLogin() {
    if(this.user){

    }
    this.submitted = true;
    if (this.loginForm && this.loginForm.valid) {
      this.user = this.loginForm.value
       const resp = this.authService.login(this.user);
       if(resp){
        this.router.navigateByUrl('/dashboard')
       }
    }
  }
  get formControl() {
    return this.loginForm?.controls;
  }


  resetPassword()
  {
      // TODO navigate user to reset password page
  }

}
