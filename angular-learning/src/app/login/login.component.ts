import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public fromName!: FormGroup;
  name: any
  title = 'angular-learning';
  constructor(private fb: FormBuilder, private router: Router,
    private userService: UserServiceService) {
    this.fromName = this.fb.group({
      name: ['', [Validators.required]]
    })
  }

  goToHomePage(username: any) {
    console.log("hello", this.name)
    if (this.fromName.valid) {
      this.router.navigate(['/home'])
    }
    this.userService.username = username;
  }

}
