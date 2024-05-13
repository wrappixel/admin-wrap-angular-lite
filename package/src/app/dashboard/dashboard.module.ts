import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { NgApexchartsModule } from 'ng-apexcharts';


const routes: Routes = [{
    path: '',
    data: {
        title: 'Dashboard',
        urls: [{ title: 'Dashboard', url: '/dashboard' }, { title: 'Dashboard' }]
    },
    component: DashboardComponent
}];

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        NgApexchartsModule,
        RouterModule.forChild(routes),
        DashboardComponent
    ]
})
export class DashboardModule { }