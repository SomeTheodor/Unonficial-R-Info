import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from "./hero/hero.component";
import { AboutComponent } from "./about/about.component";
import { FaqComponent } from './faq/faq.component';
import { FeaturesComponent } from './features/features.component';
import { FooterComponent } from './footer/footer.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, HeroComponent, AboutComponent, FeaturesComponent, FaqComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'rinfoWeb';
}
