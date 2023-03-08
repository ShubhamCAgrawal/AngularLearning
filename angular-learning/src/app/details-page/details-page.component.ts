import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css']
})
export class DetailsPageComponent implements OnInit {
  public name: any
  @Input() showNavbar = true;
  constructor(private router: Router, private userService: UserServiceService) { }
  ngOnInit() {

  }
  get username(): string {
    return this.userService.username;
  }

  goToLogin() {
    this.router.navigate(['/login'])
  }
}
