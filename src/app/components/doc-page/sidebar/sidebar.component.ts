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
  // Datos del sidebar
  @Input() data: SidebarItem[] = [];

  constructor(private sidebarService: SidebarService) {}

  // Clase dinámica para visibilidad
  sidebarClass = computed(() => {
    const baseClass = 'responsive-sidebar bg-light shadow-sm rounded';
    return this.sidebarService.isSidebarVisible()
      ? `${baseClass} d-block`
      : `${baseClass} d-none d-lg-block`;
  });
}

// Interfaz para estructurar los datos
export interface SidebarItem {
  id: string;
  nombre: string;
  subtitulos: { id: string; nombre: string }[];
}
