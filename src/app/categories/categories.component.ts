import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApplicationService } from '../application.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categoryProducts = [];
  constructor(public route: ActivatedRoute, public appService: ApplicationService) {
    this.route.paramMap.subscribe((data) => {

      console.log(data.get("id"));
      this.categoryProducts = [];
      this.appService.searchTerm="";
      this.appService.products.forEach(p =>
        {
          if(p.category == data.get("id"))
          {
            this.categoryProducts.push(p);
          }
        });
    })
    console.log(this.categoryProducts);
   }

  ngOnInit(): void {
  
  }

  inCart(p)
  {
    return this.appService.addedProducts.indexOf(p) > -1;
  }

}
