import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { CustomersComponent } from './customers/customers.component';
import { PrivateRoutingModule } from './private-routing.module';
import { CreateCustomersComponent } from './createcustomers/createcustomers.component';
import { UsersListComponent } from './userslist/userslist.component';
import { NbInputModule } from '@nebular/theme';



@NgModule({
    declarations: [UsersComponent, CustomersComponent, CreateCustomersComponent, UsersListComponent],
    imports: [ CommonModule,
    PrivateRoutingModule,
    NbInputModule,
],

})
export class PrivateModule {}



