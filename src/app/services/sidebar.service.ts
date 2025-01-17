import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  // Estado del sidebar (visible o no)
  isSidebarVisible = signal(false);

  // Nuevo estado para expansión a pantalla completa
  isSidebarExpanded = signal(false);

  // Alternar visibilidad
  toggleSidebar(): void {
    this.isSidebarVisible.update((visible) => !visible);
  }

  // Alternar expansión
  toggleSidebarExpand(): void {
    this.isSidebarExpanded.update((expanded) => !expanded);
    this.isSidebarVisible.set(true); // Asegurar que el sidebar sea visible cuando se expande
  }
  hideSidebar(): void {
    this.isSidebarVisible.set(false);
    this.isSidebarExpanded.set(false);

  }
}


