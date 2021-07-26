import { Component, OnInit } from '@angular/core';
import { ApplicationService } from '../application.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public route: Router, public appService: ApplicationService) {}


  processForm(form)
  {
      this.appService.userName = form.value.name;
      this.route.navigate(['']);
  }
  ngOnInit(): void {

  }

}
