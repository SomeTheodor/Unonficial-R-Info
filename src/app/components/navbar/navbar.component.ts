import { Component, OnInit, signal } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule, RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  // Controla la visibilidad del botón de Sidebar
  showSidebarButton = signal(false);

  constructor(private router: Router, private sidebarService: SidebarService) {}

  ngOnInit(): void {
    // Actualiza la visibilidad del botón al inicializar y al cambiar la ruta
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.updateSidebarButton();
      }
    });

    this.updateSidebarButton(); // Llama una vez al inicializar
  }

  private updateSidebarButton(): void {
    this.showSidebarButton.set(this.router.url.startsWith('/doc'));
  }

  toggleSidebar(): void {
    this.sidebarService.toggleSidebar(); // Alterna la visibilidad usando el servicio
  }
}
