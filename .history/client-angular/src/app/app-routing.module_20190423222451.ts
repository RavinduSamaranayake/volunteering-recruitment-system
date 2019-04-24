import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';

const routes: Routes = [
    { path: 'admin', loadChildren: './admin-layout/admin-layout.module#AdminLayoutModule'  },
   // { path: 'club', loadChildren: './club_layout/layout.module#LayoutModule', canActivate: [AuthGuard]},
    // { path: 'main', loadChildren: './layout/layout.module#LayoutModule' },
    { path: 'main', loadChildren: './admin-layout/adminhomepg/adminhomepg.module#AdminhomepgModule' },
    { path: 'clubmain', loadChildren: './club_layout/homepg/homepg.module#HomepgModule' },
    { path: 'home', loadChildren: './home/home.module#HomeModule' },
    { path: 'login', loadChildren: './login/login.module#LoginModule' },
    { path: 'signup', loadChildren: './trysign/signup.module#SignupModule' },
    { path: 'error', loadChildren: './server-error/server-error.module#ServerErrorModule' },
    { path: 'access-denied', loadChildren: './access-denied/access-denied.module#AccessDeniedModule' },
    { path: 'not-found', loadChildren: './not-found/not-found.module#NotFoundModule' },
    { path: '**', redirectTo: 'not-found' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
