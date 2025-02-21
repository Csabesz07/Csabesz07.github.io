import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'language',
        loadComponent: () => import('../app/components/landing-page/landing-page.component').then(c => c.LandingPageComponent),
    },
    { 
        path: '', 
        redirectTo: '/language', 
        pathMatch: 'full' 
    },
    { 
        path: '**', 
        redirectTo: '/language', 
        pathMatch: 'full' 
    },
];
