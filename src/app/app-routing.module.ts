import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { ServiceComponent } from './service/service/service.component';
import { ContactComponent } from './contact/contact/contact.component';

const routes: Routes = [
  {path : 'home', component : HomeComponent },
  {path : 'service', component : ServiceComponent },
  {path : 'contact', component : ContactComponent },
  {
    path: 'private', loadChildren: () => import('./private/private-module')
    .then(m => m.PrivateModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
