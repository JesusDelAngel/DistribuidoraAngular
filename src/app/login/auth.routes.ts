// admin.routes.ts
import { Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';

export const authRoutes: Routes = [
  {
    path: '',
    component: LoginPageComponent,
    children: [
      {
        path: 'login',
        loadComponent: () => import('./components/form-login/form-login.component').then(m => m.FormLoginComponent)
      },
      {
        path: 'register',
        loadComponent: () => import('./components/form-register/form-register.component').then(m => m.FormRegisterComponent)
      }
    //   {
    //     path: '**',
    //     redirectTo:'/auth/login'
    //  }
    ]
  }
];
