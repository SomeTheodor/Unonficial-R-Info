import { Component, computed, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarService } from '../../../services/sidebar.service';
import { Content } from '../../../interface/general';
@ Component({
  selector: 'app-sidebar',
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  @Input() general: Content[] = [];

  constructor(private sidebarService: SidebarService) {}

  closeSidebar(): void {
    this.sidebarService.hideSidebar();
  }

  sidebarClass = computed(() => {
    const baseClass = 'responsive-sidebar bg-light shadow-sm rounded';
    if (this.sidebarService.isSidebarExpanded()) {
      return `${baseClass} expanded`;
    }
    return this.sidebarService.isSidebarVisible() ? `${baseClass} visible` : `${baseClass} hidden`;
  });
}

