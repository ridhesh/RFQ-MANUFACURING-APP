import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';
export interface suppliers{
  supplier_id:number,
  name:string,
  email:string,
  phone:number,
  location:string,
  feedback:number
}

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  constructor(private http:HttpClient,private loginService:LoginService) { }
  token = this.loginService.getToken();
  addSupplier(s:suppliers){
    return this.http.post<suppliers>('http://localhost:8080/supplier/addSupplier',
    s,
   { headers:new HttpHeaders({'Content-Type':'application/json','Authorization':'Bearer '+this.token})
  });
  }

  getsupplier():Observable<suppliers[]>{
    return this.http.get<suppliers[]>("http://localhost:8080/supplier/getAllSuppliers",
    { headers:new HttpHeaders({'Content-Type':'application/json','Authorization':'Bearer '+this.token})
  });
  }

  updatesupplier(s:suppliers){
    return this.http.post<suppliers>('http://localhost:8080/supplier/editSupplier',
    s,
   { headers:new HttpHeaders({'Content-Type':'application/json','Authorization':'Bearer '+this.token})
  });
  }

  updateFeedback(s:suppliers){
    return this.http.post<suppliers>('http://localhost:8080/supplier/updateFeedback',
    s,
   { headers:new HttpHeaders({'Content-Type':'application/json','Authorization':'Bearer '+this.token})
  });
  }
  
}
