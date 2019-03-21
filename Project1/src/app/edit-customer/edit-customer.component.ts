import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Customer } from '../customer';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {

  public objectOfCustomer: Customer;
  

  constructor(private cs: CustomerService, private router: Router, private activatedRoute: ActivatedRoute) { }

  state = ["Bihar", "Jharkhand", "U.P", "M.P", "Ahmadabad", "Delhi"];
  optionSelected: any;

onOptionsSelected(event){
 console.log(event); //option value will be sent as event
}

  ngOnInit() {
    this.getCus();
  }

  getCus(): void {
    const id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.cs.getCustomer(id)
      .subscribe(data => this.objectOfCustomer = data);
     
  }


  save(): void {
    this.cs.updateCustomer(this.objectOfCustomer)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.router.navigate(['/customer'])
   }
}
