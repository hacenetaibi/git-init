import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {EmployesPage} from './pages/employes/employes';
import {SingleEmployePage} from './pages/employes/single-employe/single-employe.page';
import {HomePage} from './home/home.page';
import {LoginPage} from './pages/login/login.page';
import {AuthenticationServicese} from './services/autentication.service';
import {RegistrationPage} from './pages/registration/registration.page';


const routes: Routes = [

    {
        path: '',
        redirectTo: 'auth',
        pathMatch: 'full'
    },
    {
        path: 'auth',
        component: LoginPage,

    },
    {
        path: 'registration',
        component: RegistrationPage,

    },
 /*   {
        path: 'home',
        component: HomePage,
        loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
    },
    */
    {
        path: 'home',
        component: HomePage,
        canActivate: [AuthenticationServicese],
    },
    {
        path: 'employes',
        component: EmployesPage,
        canActivate: [AuthenticationServicese],
    },
    {
        path: 'employe',
        component: SingleEmployePage,
    },
    {
        path: 'form-employe',
        loadChildren: () => import('./pages/employes/form-employe/form-employe.module').then(m => m.FormEmployePageModule)
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
