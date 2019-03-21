import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  public customers: Customer[];
  public status: boolean = false;
  public message:String = null;
  constructor(private cs: CustomerService) { }

  ngOnInit() {
    this.getCustomer();
  }

  getCustomer() {
    this.cs.getCustomers().subscribe(data => this.customers = data);
  }

  deleteCustomer(id: number) {
    if (confirm("Are you sure to delete " + id)) {
      this.cs.delete(id).subscribe(() => {
        this.getCustomer();
      });

      this.showMessage("Customer is deleted of id "+id);
    }
  }


  showMessage(message:String){
    this.message = message;
    this.status = true;
  }

  hideMessage(){
    this.status = false;
    this.message = null;
  }

}
