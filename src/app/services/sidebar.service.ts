import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  // Estado del sidebar como un Signal
  isSidebarVisible = signal(false);

  // Método para alternar el estado del sidebar
  toggleSidebar(): void {
    this.isSidebarVisible.update((visible) => !visible);
  }

  // Método para establecer el estado del sidebar directamente
  setSidebarVisibility(visible: boolean): void {
    this.isSidebarVisible.set(visible);
  }
}
