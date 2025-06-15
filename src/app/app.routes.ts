import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'home',
        loadChildren: () => import('../app/user/user.routes').then(m => m.userRoutes)
    },
    {
        path: 'auth',
        loadChildren: () => import('./login/auth.routes').then(m => m.authRoutes)
        // loadComponent:()=> import('../app/login/pages/login-page/login-page.component').then(m => m.LoginPageComponent)    
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];
