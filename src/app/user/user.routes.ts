import { Routes } from '@angular/router';
import { UserPrincipalPageComponent } from './pages/user-principal-page/user-principal-page.component';

export const userRoutes: Routes = [
    {
        path: '',
        component: UserPrincipalPageComponent,
        children: [
            {
                path: 'product-category', // cuando entras a /productos
                loadComponent: () => import('./components/card-product-category/card-product-category.component')
                    .then(m => m.CardProductCategoryComponent)
            }
            // ,
            // {
            //     path: 'kuul',
            //     // loadComponent: () => import('./components/form-login/form-login.component').then(m => m.FormLoginComponent)
            // },
            // {
            //     path: 'colortech',
            //     // loadComponent: () => import('./components/form-register/form-register.component').then(m => m.FormRegisterComponent)
            // },
            // {
            //     path: 'hidracolor',
            //     // loadComponent: () => import('./components/form-register/form-register.component').then(m => m.FormRegisterComponent)
            // }
            // ,
            // {
            //     path: 'shampoo',
            //     // loadComponent: () => import('./components/form-register/form-register.component').then(m => m.FormRegisterComponent)
            // },
           , {
                path: '**',
                redirectTo: 'product-category'
            }
        ]
    }
];
