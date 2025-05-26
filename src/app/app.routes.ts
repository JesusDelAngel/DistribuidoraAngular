import { Routes } from '@angular/router';

export const routes: Routes = [
    // {
    //     path:'',
    //     // loadComponent:()=> import('../app/home/pages/home-page/home-page.component').then(m => m.HomePageComponent)    
    // },
    {
        path:'auth',
         loadChildren: () => import('./login/auth.routes').then(m => m.authRoutes) 
        // loadComponent:()=> import('../app/login/pages/login-page/login-page.component').then(m => m.LoginPageComponent)    
    },      {
        path: '**',
        redirectTo:'/auth/login'
     }
];
