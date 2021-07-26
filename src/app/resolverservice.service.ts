import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { ApplicationService } from './application.service';
@Injectable({
  providedIn: 'root'
})
export class ResolverserviceService implements Resolve<Observable<any>> {



  constructor(public appService: ApplicationService) { }
  
  resolve()
  {
      return this.appService.getproducts();
  }
  
}
