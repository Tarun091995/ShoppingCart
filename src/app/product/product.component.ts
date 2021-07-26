import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ApplicationService } from '../application.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  singleProduct;
  constructor(public route: ActivatedRoute, public appService: ApplicationService) { 
    this.route.paramMap.subscribe((data) => {
      console.log(data.get("id"));
      this.appService.products.forEach(product =>
        {
          if(product.id == data.get("id"))
          {
            this.singleProduct = product;
          }
        });
        console.log(this.singleProduct);

    })
  }

  ngOnInit(): void {


  }

  inCart()
  {
    return this.appService.addedProducts.indexOf(this.singleProduct) > -1;
  }

}
