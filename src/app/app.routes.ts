import { Routes } from '@angular/router';
import { WebLayoutComponent } from './layouts/web-layout/web-layout.component';

import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

export const routes:Routes=[
    //Web-App Routes
    { 
        'path': '',
        'title':'Home',
        component:WebLayoutComponent,
        children:[
            {
                'path':'',
                redirectTo:'/home',
                pathMatch:'full'
            },
            {
                path:'',
                loadChildren : () => import('./web/web.module').then(m => m.WebModule)
            }
        ]
    },

    //Auth Routes
    {
        'path' : '',
        component : AuthLayoutComponent,
        children:[
            {
                path:'',
                redirectTo:'/auth',
                pathMatch:'full'
            },
            {
                path:'auth',
                loadChildren : () => import('./auth/auth.module').then(m => m.AuthModule)
            }
        ]
    }
];

// export const routes: Routes = [
//     { 'path': 'identity','title':'identity',component:IdentityComponent},
//     { 'path': 'identity', children:[
//         {'path':'login','title':'Login',component:LoginComponent},
//         {'path':'registration','title':'Onboarding',component:OnboardingComponent}
//     ]},
//     { 'path': '','title':'Alfa Web', component:WeblayoutComponent},
//     { 'path': '', children:[
//         {'path':'home','title':'Home | Dashboard',component:HomeComponent},
//     ]},
// ];
