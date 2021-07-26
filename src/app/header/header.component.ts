import { Component, OnInit } from '@angular/core';
import { ApplicationService } from '../application.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public appService: ApplicationService) 
  {
    console.log(this.appService.categories);
  }

  ngOnInit(): void {
  }

  logout()
  {
    this.appService.userName = ""; 
  }

}
