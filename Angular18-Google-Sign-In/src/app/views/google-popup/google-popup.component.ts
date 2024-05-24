import { Component } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-google-popup',
  standalone: true,
  imports: [],
  templateUrl: './google-popup.component.html',
  styleUrl: './google-popup.component.less'
})
export class GooglePopupComponent {
  env: any;
  
  constructor() { 
    this.env = environment;
  }
}
