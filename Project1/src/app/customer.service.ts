import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Customer } from './customer';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {


  
  constructor(
    private http: HttpClient
  ) { }


 httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private customerUrl = 'http://127.0.0.1:8000/customer/';

  /** GET Customeres from the server */
  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.customerUrl)
  }

  /** GET Customer by id. Will 404 if id not found */
  getCustomer(id: number): Observable<Customer> {
    const url = `${this.customerUrl}${id}/`;
    return this.http.get<Customer>(url)
  }


  addCustomer(customerObj: Customer): Observable<Customer> {
    return this.http.post<Customer>(this.customerUrl, customerObj, this.httpOptions)
  }


  public updateCustomer(customerObj: Customer){
    return this.http.put(`${this.customerUrl}${customerObj.id}/`, customerObj, this.httpOptions);
}


  /** DELETE: delete the hero from the server */
  delete(customerObj: Customer | number): Observable<Customer> {
    const id = typeof customerObj === 'number' ? customerObj : customerObj.id;
    const url = `${this.customerUrl}${id}`;

    return this.http.delete<Customer>(url, this.httpOptions)
  }




}
