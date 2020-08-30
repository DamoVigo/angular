import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-userslist-createcustomers',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Coucou';
  baffe = 'Routage des pages';
  suite: string;
  constructor(private router: Router){}
  // goContact(){
  //   this.router.navigate(['contact']);
  // }
}
