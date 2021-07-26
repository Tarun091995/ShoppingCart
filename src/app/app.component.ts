import { Component } from '@angular/core';
import { from, Subscriber } from 'rxjs';
import {ApplicationService } from './application.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Application';

  constructor(public appservice: ApplicationService)
  {
      this.appservice.getproducts().subscribe(
        (products: any) => {
          this.appservice.products = products;
          console.log(products);

          this.appservice.getcategory().subscribe((categories: any)=> {
            this.appservice.categories = categories;
        })
        }
      )

  }

  logout()
  {
    this.appservice.userName = ""; 
  }
}


