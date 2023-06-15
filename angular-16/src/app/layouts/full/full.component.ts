import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { BreadcrumbComponent } from 'src/app/shared/breadcrumb/breadcrumb.component';
import { NavigationComponent } from 'src/app/shared/header-navigation/navigation.component';
import { SidebarComponent } from 'src/app/shared/sidebar/sidebar.component';


@Component({
    selector: 'full-layout',
    standalone: true,
    imports: [RouterModule, NavigationComponent, SidebarComponent, BreadcrumbComponent, NgScrollbarModule, NgClass],
    templateUrl: './full.component.html',
    styleUrls: ['./full.component.scss']
})
export class FullComponent implements OnInit {

    color = 'default';
    showSettings = false;
    showMinisidebar = false;
    showDarktheme = false;
    public showMobileMenu = false;


    constructor(public router: Router) { }

    ngOnInit() {
        if (this.router.url === '/') {
            this.router.navigate(['/starter']);
        }
    }

}
