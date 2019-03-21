import { Component, OnInit } from '@angular/core';
import { Customer} from '../customer';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {


  constructor(private cs:CustomerService, private router:Router) { }

  ngOnInit() {
  }

  state = ["Bihar", "Jharkhand", "U.P", "M.P", "Ahmadabad", "Delhi"];

  customer = new Customer( 1, "", "", "", "", "");

// customer data submit method
  submitted = false;

  onSubmit(){
    console.log(this.customer);
    this.submitted = true;
    this.cs.addCustomer(this.customer).subscribe(( )=> this.goBack());
  }
  goBack(): void {
   this.router.navigate(['/customer'])
  }

}