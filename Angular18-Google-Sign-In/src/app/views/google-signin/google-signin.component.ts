import { Component, OnInit, Inject } from '@angular/core';
import { environment } from '../../../environments/environment';



@Component({
  selector: 'app-google-signin',
  standalone: true,
  imports: [

  ],
  providers: [],
  templateUrl: './google-signin.component.html',
  styleUrl: './google-signin.component.less'
})
export class GoogleSigninComponent {
  env: any;

  constructor() { 
    this.env = environment;
  }
}
