import { Component, HostListener, OnInit } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { ContentComponent } from './content/content.component';
import { StrapiService } from '../../services/strapi.service';
import { SidebarService } from '../../services/sidebar.service';
import { CommonModule } from '@angular/common';
import { ApiResponse, Content } from '../../interface/general';
@Component({
  selector: 'app-doc-page',
  imports: [NavbarComponent, SidebarComponent, ContentComponent, CommonModule],
  templateUrl: './doc-page.component.html',
  styleUrls: ['./doc-page.component.css']
})
export class DocPageComponent implements OnInit {
  contents: Content[] = [];  // Especificar el tipo de los contenidos
  isSmallScreen: boolean = window.innerWidth < 768;

  constructor(
    public sidebarService: SidebarService,
    private strapiService: StrapiService
  ) {}

  ngOnInit(): void {
    this.strapiService.getData<ApiResponse<{ contents: Content[] }>>('documentacion?populate=contents.subcontents').subscribe({
      next: (response) => {
        // Asegúrate de que `contents` es un array antes de asignarlo
        if (response.data && Array.isArray(response.data.contents)) {
          this.contents = response.data.contents;
          console.log(this.contents)
        } else {
          console.error('Unexpected data structure:', response.data);
          this.contents = []; // Por seguridad, inicializa como un array vacío
        }
      },
      error: (err) => {
        console.error('Error fetching documentation content:', err);
      },
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
