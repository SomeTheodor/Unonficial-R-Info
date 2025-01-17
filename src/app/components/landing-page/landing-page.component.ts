import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { FooterComponent } from './footer/footer.component';
import { FeaturesComponent } from './features/features.component';
import { FaqComponent } from './faq/faq.component';
import { AboutComponent } from './about/about.component';

@Component({
  selector: 'app-landing-page',
  imports: [NavbarComponent, HeroComponent, FooterComponent, FeaturesComponent, FaqComponent, AboutComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

}
