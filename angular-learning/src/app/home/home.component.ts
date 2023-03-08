import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  servername: any
  public fromName!: FormGroup;
  constructor(private fb: FormBuilder, private router: Router) {
    {
      this.fromName = this.fb.group({
        serverName: ['', [Validators.required]]
      })
    }
  }

  getServerName() {
    // this.servername
  }
}