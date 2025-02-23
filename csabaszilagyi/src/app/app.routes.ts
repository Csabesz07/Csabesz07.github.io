import { Routes } from '@angular/router';
import { languageControlGuard } from './guards/language-control.guard';

export const routes: Routes = [
    {
        path: 'language',
        loadComponent: () => import('../app/components/landing-page/landing-page.component').then(c => c.LandingPageComponent),
    },
    {
        path: 'galaxy',
        loadComponent: () => import('../app/components/galaxy/galaxy.component').then(c => c.GalaxyComponent),
        canActivate: [ languageControlGuard ]
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
