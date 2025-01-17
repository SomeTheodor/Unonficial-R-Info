import { Component, computed, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarService } from '../../../services/sidebar.service';
@Component({
  selector: 'app-sidebar',
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  @Input() data: SidebarItem[] = [];

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

// Interfaz para estructurar los datos
export interface SidebarItem {
  id: string;
  nombre: string;
  subtitulos: { id: string; nombre: string }[];
}
