import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SpinnerComponent } from './shared/spinner.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { NavigationComponent } from './shared/header-navigation/navigation.component';
import { FullComponent } from './layouts/full/full.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, SpinnerComponent, SidebarComponent, NavigationComponent, FullComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
