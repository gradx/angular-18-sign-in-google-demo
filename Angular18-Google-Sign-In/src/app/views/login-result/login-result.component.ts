import { Component } from '@angular/core';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { AuthStoreProvider } from '../../signal-stores/auth-store';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login-result',
  standalone: true,
  imports: [AsyncPipe, JsonPipe],
  templateUrl: './login-result.component.html',
  styleUrl: './login-result.component.less',
})

export class LoginResultComponent {
  authProvider: AuthStoreProvider;
  data: DataService;

  message$: Observable<string>

  constructor(private authStoreProvider: AuthStoreProvider, private dataService: DataService) {
    this.authProvider = authStoreProvider;
    this.data = dataService;
    this.message$ = this.dataService.getMessage();
  }

}
