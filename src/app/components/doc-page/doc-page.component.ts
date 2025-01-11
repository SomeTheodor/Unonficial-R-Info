import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { ContentComponent } from './content/content.component';
import { StrapiService } from '../../services/strapi.service';
@Component({
  selector: 'app-doc-page',
  imports: [NavbarComponent, SidebarComponent, ContentComponent],
  templateUrl: './doc-page.component.html',
  styleUrl: './doc-page.component.css'
})
  export class DocPageComponent implements OnInit {
    data: any[] = []; // Datos que se pasarán al componente hijo

    constructor(private strapiService: StrapiService) {}

    ngOnInit(): void {
      // Llama al endpoint 'titulos' y obtiene los datos
      this.strapiService.getData('titulos', { populate: 'subtitulos' }).subscribe({
        next: (response) => {
          this.data = response.data.map((item: any) => ({
            id: item.id,
            nombre: item.nombre,
            texto: item.texto,
            subtitulos: item.subtitulos || [],
          }));
          console.log(this.data);
        },
        error: (err) => {
          console.error('Error al cargar datos:', err.message);
        },
      });
    }
  }
