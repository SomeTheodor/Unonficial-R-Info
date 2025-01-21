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
    this.strapiService.getData<ApiResponse<{ content_documents: Content[] }>>('documentacion?populate=content_documents.subcontent_documents')
      .subscribe({
        next: (response) => {
          // Verifica que `content_documents` exista y sea un array
          if (response.data && Array.isArray(response.data.content_documents)) {
            this.contents = response.data.content_documents;
            console.log(this.contents);
          } else {
            console.error('Unexpected data structure:', response.data);
            this.contents = []; // Inicializa como un array vacío para evitar errores
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
