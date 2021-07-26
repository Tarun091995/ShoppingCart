import { Component, OnInit } from '@angular/core';
import {ApplicationService } from '../application.service';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Component({
  selector: 'app-homecomponent',
  templateUrl: './homecomponent.component.html',
  styleUrls: ['./homecomponent.component.css']
})
export class HomecomponentComponent implements OnInit {

productId = this.appService.products['id'];
  
  constructor(public appService: ApplicationService)
  { 
    console.log(this.appService.products);    
  }

  ngOnInit(): void {
  }

  addToCart(p)
  {
      this.appService.addedProducts.push(p)
  }

  inCart(p)
  {
      return this.appService.addedProducts.indexOf(p) > -1;
  }

  removeFromCart(product)
  {
    this.appService.addedProducts.splice(this.appService.addedProducts.indexOf(product),1);
  }

  ngOnDestroy()
  {
    this.appService.searchTerm = "";
  }
}
