import { Routes } from '@angular/router';
import { UserPrincipalPageComponent } from './pages/user-principal-page/user-principal-page.component';
import { UserServicesPageComponent } from './pages/user-services-page/user-services-page.component';
import { KuulLayoutPagesComponent } from './pages/kuul-layout-pages/kuul-layout-pages.component';

export const userRoutes: Routes = [
    {
        path: '',
        component: UserPrincipalPageComponent,
        children: [
            {
                path: '', // cuando entras a /productos
                loadComponent: () => import('./pages/page-principal-products/page-principal-products.component').then(m => m.PagePrincipalProductsComponent),
                children: [
                    {
                        path: '',
                        loadComponent: () => import('./components/card-product-category/card-product-category.component').then(m => m.CardProductCategoryComponent)
                    },
                    {
                        path: 'kuul',
                        loadComponent: () => import('./pages/kuul-layout-pages/kuul-layout-pages.component').then(m => m.KuulLayoutPagesComponent)
                        , children: [
                            {
                                path: '',
                                loadComponent: () => import('./pages/kuul-page/kuul-page.component').then(m => m.KuulPageComponent),
                            },
                            {
                                path: 'coloracionPermanente',
                                loadComponent: () => import('./pages/user-list-product/user-list-product.component').then(m => m.UserListProductComponent)
                            },
                             {
                                path: 'coloracionFantasia',
                                loadComponent: () => import('./pages/user-list-product/user-list-product.component').then(m => m.UserListProductComponent)
                            },
                             {
                                path: 'decolorantes',
                                loadComponent: () => import('./pages/user-list-product/user-list-product.component').then(m => m.UserListProductComponent)
                            },
                            
                            {
                                path: '**',
                                redirectTo: ''
                            }
                        ]
                    },
                    {
                        path: 'hidracolor',
                        loadComponent: () => import('./pages/hidracolor-page/hidracolor-page.component').then(m => m.HidracolorPageComponent)
                    },
                    {
                        path: 'colortech',
                        loadComponent: () => import('./pages/colortech-page/colortech-page.component').then(m => m.ColortechPageComponent)
                    },
                    {
                        path: 'shampoo',
                        loadComponent: () => import('./pages/shampoo-page/shampoo-page.component').then(m => m.ShampooPageComponent)
                    }]
            },
            {
                path: 'servicios',
                loadComponent: () => import('../user/pages/user-services-page/user-services-page.component').then(m => m.UserServicesPageComponent)
            },
            {
                path: 'carrito-compras',
                loadComponent: () => import('../user/pages/user-my-car-page/user-my-car-page.component').then(m => m.UserMyCarPageComponent)
            }
            ,
            {
                path: 'perfil',
                loadComponent: () => import('../user/pages/user-my-profile-page/user-my-profile-page.component').then(m => m.UserMyProfilePageComponent)
            }
            , {
                path: '**',
                redirectTo: ''
            }
        ]
    }
];
