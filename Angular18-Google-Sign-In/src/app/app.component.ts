import { Component, Inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthStoreProvider }  from './signal-stores/auth-store';
import { DataService } from './services/data.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  providers: [AuthStoreProvider, DataService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
})


export class AppComponent {
  title = 'Angular17SignInDemo';
  
  constructor() {}

  ngOnInit(): void {
    
  }
}
