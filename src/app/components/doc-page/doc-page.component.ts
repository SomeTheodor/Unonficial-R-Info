import { Component, HostListener, OnInit } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { ContentComponent } from './content/content.component';
import { StrapiService } from '../../services/strapi.service';
import { SidebarService } from '../../services/sidebar.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-doc-page',
  imports: [NavbarComponent, SidebarComponent, ContentComponent, CommonModule],
  templateUrl: './doc-page.component.html',
  styleUrls: ['./doc-page.component.css']
})
export class DocPageComponent implements OnInit {
  data: any[] = [];
  isSmallScreen: boolean = window.innerWidth < 768;

  constructor(
    public sidebarService: SidebarService, // Cambiado a 'public'
    private strapiService: StrapiService
  ) {}

  ngOnInit(): void {
    this.strapiService.getData('titulos', { populate: 'subtitulos' }).subscribe({
      next: (response) => {
        this.data = response.data.map((item: any) => ({
          id: item.id,
          nombre: item.nombre,
          texto: item.texto,
          subtitulos: item.subtitulos || [],
        }));
      },
      error: (err) => console.error('Error al cargar datos:', err),
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.isSmallScreen = event.target.innerWidth < 768;
  }

  isSidebarVisible(): boolean {
    return this.sidebarService.isSidebarVisible();
  }
}
