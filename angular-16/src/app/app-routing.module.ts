import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FullComponent } from './layouts/full/full.component';

export const Approutes: Routes = [
    {
        path: '',
        component: FullComponent,
        children: [
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
            { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
            { path: 'component', loadChildren: () => import('./component/component.module').then(m => m.ComponentsModule) }
        ]
    },
    {
        path: '**',
        redirectTo: '/dashboard'
    }];

@NgModule({
    imports: [RouterModule.forRoot(Approutes), NgbModule],
    exports: [RouterModule]
})
export class AppRoutingModule { }

