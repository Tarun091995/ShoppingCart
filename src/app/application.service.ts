import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

   userName = '';
   products: any[] = [];
   categories: any[] = [];
   addedProducts: any[] = [];
   searchTerm = "";
   totalAmount = 0;

  constructor(public http: HttpClient) {
       // this.http.get('./assets/assets-ec-json');
   }

   getcategory()
   {
      return this.http.get('./assets/assets-ec-json/categories.json');          
   }

   getproducts()
   {
      return this.http.get('./assets/assets-ec-json/products.json');
   }
}
