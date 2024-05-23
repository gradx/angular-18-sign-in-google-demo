import { Routes } from '@angular/router';
import { LoginResultComponent } from './views/login-result/login-result.component';
import { GoogleSigninComponent } from './views/google-signin/google-signin.component';
import { authGuard } from './guards/auth.guard';
import { UnauthorizedComponent } from './views/unauthorized/unauthorized.component';

export const routes: Routes = [
    { path: 'signin', component: GoogleSigninComponent },
    { path: 'login-result',  canActivate: [authGuard], component: LoginResultComponent },
    { path: 'unauthorized', component: UnauthorizedComponent },
    { path: '',   redirectTo: '/signin', pathMatch: 'full' }, 
];
