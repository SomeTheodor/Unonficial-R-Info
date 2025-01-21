import { Component } from '@angular/core';
import { StrapiService } from '../../../services/strapi.service';
import { ApiResponse, GeneralContentSolo } from '../../../interface/general';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
@Component({
  selector: 'app-about',
  imports: [RouterModule, RouterLink, RouterLinkActive],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  general: GeneralContentSolo | null = null; // Cambiar a un solo contenido
    baseUrl = 'http://localhost:1337'; // Ajusta con tu URL real

    constructor(private strapiService: StrapiService) {}
    ngOnInit(): void {
      this.strapiService.getData<ApiResponse<GeneralContentSolo>>('about?populate=*').subscribe({
        next: (response) => {
          console.log(response); // Verifica la estructura
          this.general = response.data; // Extrae directamente 'data'
        },
        error: (err) => {
          console.error('Error fetching home content:', err);
        },
      });
    }
}
