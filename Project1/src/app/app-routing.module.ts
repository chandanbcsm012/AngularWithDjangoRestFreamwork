import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { CustomerComponent } from './customer/customer.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: 'customer', component: CustomerComponent},
  { path:'add-customer', component: AddCustomerComponent },
  { path:'edit-customer/:id', component: EditCustomerComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
