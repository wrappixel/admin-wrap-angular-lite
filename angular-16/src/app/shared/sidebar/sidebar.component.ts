import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ROUTES } from './menu-items';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { NgClass, NgForOf, NgIf } from '@angular/common';
declare var $: any;
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ap-sidebar',
  standalone: true,
  imports: [NgClass, RouterModule, NgIf, NgForOf],
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  showMenu = '';

  public sidebarnavItems: any[] = [];
  // this is for the open close
  addExpandClass(element: any) {
    if (element === this.showMenu) {
      this.showMenu = '0';
    } else {
      this.showMenu = element;
    }
  }

  constructor(
    private modalService: NgbModal,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  // End open close
  ngOnInit() {
    this.sidebarnavItems = ROUTES.filter(sidebarnavItem => sidebarnavItem);
  }
}
