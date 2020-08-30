import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UsersListComponent } from './userslist/userslist.component';
import { CustomersComponent } from './customers/customers.component';
import { CreateCustomersComponent } from './createcustomers/createcustomers.component';



const routes: Routes = [
    {path: 'users', children : [
        {path: '', component: UsersComponent},
        {path: 'userslist', component : UsersListComponent}
    ]},
    {path: 'customers', children : [
        {path: '', component: CustomersComponent},
        {path: 'createcustomers', component : CreateCustomersComponent}
    ]}
];



@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],

})
export class PrivateRoutingModule { }
