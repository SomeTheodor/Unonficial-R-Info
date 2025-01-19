import { Component } from '@angular/core';
import { StrapiService } from '../../../services/strapi.service';
import { ApiResponse, GeneralContentSolo } from '../../../interface/general';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-hero',
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  general: GeneralContentSolo | null = null; // Cambiar a un solo contenido
  baseUrl = 'http://localhost:1337'; // Ajusta con tu URL real

  constructor(private strapiService: StrapiService) {}
  ngOnInit(): void {
    this.strapiService.getData<ApiResponse<GeneralContentSolo>>('home?populate=*').subscribe({
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
